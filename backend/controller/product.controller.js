import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async(req,res)=>{

    try{
        const products = await Product.find({})
        res.status(200).json({success :true , data:products})
    }catch{
        res.status(500).json({success :false , message:"Error fetching products"})
        console.log("error in fetching products")
    }

}

export const createproduct = async (req,res) =>{

    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false ,message: "Please fill in all fields"})
        }
    
    const newProduct = new Product(product)   
    
    try{
        await newProduct.save()
        res.status(201).json({success:true , data:newProduct})
    }catch(error){
        console.error("Enter in create product:",error)
        res.status(500).json({success:false , message:"server error"})
    }
}

export const updateproduct = async (req,res) =>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false ,message: "Invalid product id"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true})
        res.status(200).json({ success: true , data: updatedProduct})
    }catch (error){
        console.log("error in updating product:",error.message)
        res.status(500).json({success:false , message:"server error"})
    }
}
 
export const deleteproduct = async (req,res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false ,message: "Invalid product id"})
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true , message:"product deleted"})
    }catch (error){
        res.status(500).json({success:false , message:"server error"})
        console.log("Error in delete product:",error.message)
    }
}