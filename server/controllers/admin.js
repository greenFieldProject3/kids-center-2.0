const User = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
     return jwt.sign({ id }, "stack", {});
};

module.exports = {
     signin: async (req, res, next) => {
          const { username, password } = req.body;

          try {
               const foundUser = await User.login(username, password);

               const token = createToken(foundUser._id);
               res.cookie("jwt", token, { httpOnly: true, maxAge: 365 * 24 * 60 * 60 * 1000 });
               res.status(201).json(foundUser);
          } catch (error) {
               res.status(400).send(error);
          }
     },
     signup: async (req, res, next) => {
          const { username, fullname, email, password } = req.body;
          try {
               const savedUser = await User.create({
                    username,
                    fullname,
                    email,
                    password
               });

               const foundUser = await User
                    .findById(savedUser._id)
                    .select("-password");

               res.status(201).json(foundUser);
          } catch (error) {
               res.status(400).json(error);
          }
     },
     contact: async (req, res, next) => {
          try {

               const savedUser = await User.findOneAndUpdate({ username: 'admin' }, { $push: { contact: req.body } }); // add message to array contact
               const foundUser = await User.find();

               res.status(201).json(foundUser[0]);
          } catch (error) {
               res.status(400).json(error);
          }
     },
};
