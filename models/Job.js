const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        company:{
            type:String,
            maxlength:50,
            required:[true,"Please provide company name"]
        },
        position:{
            type:String,
            maxlength:50,
            required:[true,"Please provide position"]
        },
        status:{
            type:String,
            enum:["interview","declined","pending"],
            default:"pending"
        },
        createdBy:{
            // this is typically used to store the
            // reference of another document
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:[true,"Please provide user"]
        }
    },
    {timestamps:true}
)

module.exports = mongoose.model("Job",JobSchema)
