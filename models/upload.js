const mongoose =require('mongoose')

const postschema=new mongoose.Schema({
    description:{
        type:String
    },
    posturl:{
        type:String
    },
    profileurl:{
        type:String

    },
    username:{
        type:String
    },
    like:{
        type:String

    }
})

module.exports=  mongoose.model('upload',postschema)