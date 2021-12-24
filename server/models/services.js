var mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
  {
    title      : String,
    description: String,
    price      : String,
    categorie  : String,
    picture    : { type: String , default: "" },
    available  : { type: Boolean, default: true },
    user       : {
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
                }
  },{ timestamps: true, versionKey: false }
);

var Service = mongoose.model('Service', serviceSchema);



module.exports = Service

