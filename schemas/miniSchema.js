const { Schema, model } = require("mongoose");
require("dotenv").config();

const schemaData = new Schema(
  {
    username: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    role: { type: String, default: "user" }, 
    favouritePhotos:[{_id:{type:String}}],
    status: { type: Boolean, default: false },
    albums:{
      type:[
        {
          AlbumName:{type:String,required:true},
          file:{
            type:[
              {
              file:{type:String,required:true},
              fileName:{type:String,required:true},
              date:{type:Date,default:new Date()},
              status:{type:Boolean,default:true}
              
          },
        ],
          },
          date:{type:Date,default:new Date()},
          status:{type:Boolean,default:true},
          gallery:{
            type:[
              {
                file:{type:String},
                fileName:{type:String},
                date:{type:Date,default:new Date()},
                status:{type:Boolean,default:true}
              },
            ],
          },
        },
      ]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model('mini', schemaData);
