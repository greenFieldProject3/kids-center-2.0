const mongoose = require("mongoose");
const bcrypt   = require("bcrypt");

const adminSchema = mongoose.Schema({
     fullname: { type: String },
     username: { type: String },
     email   : { type: String },
     password: { type: String },
     contact : { type: Array, default: [] },
     user_img: { type: String, default: "https://www.bootdey.com/img/Content/avatar/avatar7.png" },
}, { timestamps: true });

adminSchema.statics.login = async function (username, plainTextPassword) {
     const foundUser = await this.findOne({ username });
     if (foundUser) {
          const success = await bcrypt.compare(
               plainTextPassword,
               foundUser.password
          );
          if (success) return foundUser;
     }
};

adminSchema.pre("save", async function (next) {
     this.password = await bcrypt.hash(this.password, 12);
     next();
});

module.exports = mongoose.model("Admin", adminSchema);
