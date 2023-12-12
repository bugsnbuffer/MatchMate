import mongoose from "mongoose"

const placeSchema = new mongoose.Schema({
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    description:String,
    imgUrls:[String],
    budget:Number,
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true,
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
      address: { type: String, required: true },
      hasFurniture:{ type: Boolean, required: true },
      hasKitchen:{ type: Boolean, required: true },


})


placeSchema.index({ location: '2dsphere' });


const Place = mongoose.model("Place",placeSchema)


export default Place