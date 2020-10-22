const router = require('express').Router();
const Product = require('../models/product');
const checkJWT = require('../middlewares/check-jwt');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,'./uploads/');
  },
  filename: function(req, file, cb) {
   cb(null,Date.now()+'-'+file.originalname);
}
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
 limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter:fileFilter
});



router.route('/products')
  .get(checkJWT, (req, res, next) => {
    Product.find({ owner: req.decoded.user._id })
      .populate('owner')
      .populate('category')
      .exec((err, products) => {
        if (products) {
          res.json({
            success: true,
            products: products,
            message: "Products"
          });
        }
      });
  })
  .post([checkJWT, upload.single('product_picture')], (req, res, next) => {
    console.log(upload);
    console.log(req.file);
    let product = new Product();
    product.owner = req.decoded.user._id;
    product.category = req.body.categoryId;
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.image = req.file.path;
    product.save();
    res.json({
      success: true,
      message: 'Successfully Added the product'
    });
  });

 
module.exports = router;