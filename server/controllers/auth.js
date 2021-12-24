const User = require("../models/user");
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
          const { username, fullname, email, address, category, password, city,phone,specialty } = req.body;
          try {
               const savedUser = await User.create({
                    category,
                    fullname,
                    username,
                    email,
                    password,
                    address,
                    city,
                    phone,
                    specialty
               });

               const foundUser = await User
                    .findById(savedUser._id)
                    .select("-password");

               res.status(201).json(foundUser);
          } catch (error) {
               res.status(400).json(simplify(error));
          }
     },
     logout: async (req, res, next) => {
          // logout
     },
};
