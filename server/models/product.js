const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const mongooseAlgolia = require('mongoose-algolia');


//Creating  Product Schema
const ProductSchema = new Schema({
  
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  owner:  { type: Schema.Types.ObjectId, ref: 'User'},
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
  image: String,
  title: String,
  description: String,
  price: Number,
  crated: { type: Date, default: Date.now }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


ProductSchema.plugin(deepPopulate);   
ProductSchema.plugin(mongooseAlgolia, {
  appId: 'j9cWfT4xyd8xMYxpCGGZ2bWmBcu58oh4TmtNApDwuB8=',
  apiKey: 'tflIMqwo7cMq7MNVcXqrEuDy0WbzvxW6OKUNtzaz6mE=',
  indexName: 'Ecomprod',
  selector: '_id title image reviews description price owner created averageRating',
  populate: {
    path: 'owner reviews',
    select: 'name rating'
  },
  defaults: {
    author: 'unknown'
  },
  mappings: {
    title: function(value) {
      return `${value}`
    }
  },
  debug: true
})
 

module.exports =  mongoose.model('Product', ProductSchema);