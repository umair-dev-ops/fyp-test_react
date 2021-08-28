const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post("/register", async (req, res) => {
  const {radio1,
    radio2,
    university,
    transcript,
    skills,
    salary,
    name,
    email,
    password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).send("Please filled the empty field properly");
  }

  // With Async and Await
  try {
    const userExist = await User.findOne({ email:email });

    // if (userExist) {
    //   return res.status.toString(422).json({ error: "Email already Exist" });
    // }  
    // else {
    //   // const user = new User(req.body).save();
      const user = new User(
        {
        radio1,
        radio2,
        university,
        transcript,
        skills,
        salary,
        name,
        email,
        password
        });

      // yaha pr password and cpassword ko hash karain gy

      const userRegistered = await user.save();

      res.status(201).json({ message: "User Registered Successfully" });

      // if (userRegistered) {
      //   res.status(201).json({ message: "User Registered Successfully" });
      // } else {
      //   res.status(500).json({ error: "Failed to registered" });
      // }
    //}
  } catch (error) {
    console.log(error);
  }

  // With Promise
  // User.findOne({ email: email })
  //   .then((userExist) => {
  //     if (userExist) {
  //       return res.status.toString(422).json({ error: "Email already Exist" });
  //     }

  //     // const user = new User(req.body).save();
  //     const user = new User({
  //       name: name,
  //       email: email,
  //       phone,
  //       work,
  //       password,
  //       cpassword,
  //     });

  //     user
  //       .save()
  //       .then(() => {
  //         res.status(201).json({ message: "user registered successfully" });
  //       })
  //       .catch((err) =>
  //         res.status(500).json({ error: "Failed to registered" })
  //       );
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // console.log(req.body);
  // res.json({ message: req.body });
  // res.send("mera register page");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz filled the data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // Generate Web Tokens for security
      const token = await userLogin.generateAuthToken();
      console.log(token);

      // Generate cookies
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      // if (!userlogin)
      if (!isMatch)
        res.status(400).json({ error: "Invalid login Credentials pass" });
      else res.json({ message: "User Signin Successfully" });
    } else {
      res.status(400).json({ error: "Invalid login Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;