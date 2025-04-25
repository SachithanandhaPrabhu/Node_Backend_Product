// import models in controller
const product = require("../models/product.models");

// post a product 
const createpostproduct = async(req,res)=>{
  try{
  const Products = await product.create(req.body);
  res.status(200).json(Products)
  }
  catch(error){
  res.status(500).json({message : error.message});
  }
}
// get All products
const Allproducts =async(req,res)=>{
    try{
        const Products = await product.find({});
        res.status(200).json(Products)
        }
        catch(error){
        res.status(500).json({message : error.message});
        }
}

//GET A  single API
const singleproduct=async(req, res) => {
    try{
    const {id}=req.params;
    const Products = await product.findById(id);
    res.status(200).json(Products)
    }
    catch(error){
    res.status(500).json({message : error.message});
    }
  }


  //Update a product
const Updatedproduct = async(req, res) => {
    try{
    const {id}=req.params;
    const findProducts = await product.findByIdAndUpdate(id,req.body);
    if(!product)
    {
      return res.status(404).json({message :'product not found'});
    }
    const UpdatedProducts = await product.findById(id);
    res.status(200).json(UpdatedProducts)
    }
    catch(error){
    res.status(500).json({message : error.message});
    }
  }


  //Delete a product
   const deletedProduct = async(req, res) => {
    try{
    const {id}=req.params;
    const DeletedProduct = await product.findByIdAndDelete(id);
    if(!Deletedproduct)
    {
      return res.status(404).json({message :'product not found'});
    }
    
      return res.status(200).json(DeletedProduct)
    }
    catch(error){
    res.status(500).json({message : 'Product deleted Sucessfully'});
    }
  }

//exporting product
module.exports={
    createpostproduct,Allproducts,singleproduct,Updatedproduct,deletedProduct}
  