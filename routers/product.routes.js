 const express = require("express");
 const {createpostproduct,Allproducts,singleproduct,Updatedproduct,deletedProduct}=require('../controllers/product.controllers');
 const router = express.Router(); 
 router.post('/',createpostproduct);
 router.get('/',Allproducts);
 router.get('/:id',singleproduct);
 router.put('/:id',Updatedproduct);
 router.delete('/:id',deletedProduct);

 module.exports = router;