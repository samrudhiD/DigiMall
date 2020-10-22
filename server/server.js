const express = require('express');                
 const morgan = require('morgan');                  
const bodyParser = require('body-parser');         
const mongoose = require('mongoose');              
const cors = require('cors');                      
const config = require('./config');
const app = express();                              




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));




mongoose.connect(config.database, {
    useNewUrlParser:true,
}).then(()=>{
    console.log("successfully connected to the database");
}).catch(err=>{
    console.log('could not connect to the database.Existing now');
    process.exit();
});

const Users = require('./routes/account');
const mainRoutes = require('./routes/main');
const sellerRoutes = require('./routes/seller');
const productSearchRoutes = require('./routes/product-search');




app.use('/api/account', Users)
app.use('/api', mainRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/search', productSearchRoutes);


app.listen(config.port, err => {
    console.log('Server connected at port: ' + config.port);
  });
  