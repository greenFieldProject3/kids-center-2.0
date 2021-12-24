const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    message :{ type: String },
    user    :{
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", eventSchema);
