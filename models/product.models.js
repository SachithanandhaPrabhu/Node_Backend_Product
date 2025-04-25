//importing mongodb atlas
const mongoose= require('mongoose');
//creating schema
const ProductSchema =mongoose.Schema(
    {
    Name :{
        type : String,
        required :[true,'please enter a value']
    },
    Quantity :{
        type : Number,
        required : true,
        default : 0

    },
    Price : {
        type : Number,

        required : true,
        default : 0
    }
},
    {
        timestamps : true
    }

)
//connecting product with db
const product = mongoose.model("Products",ProductSchema);
//exporting product
module.exports = product;