const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const session = require("express-session")
const User = require("./models/User");
const ContactUs = require("./models/ContactUs");

const app = express();

// ========== Built_in Middlewares ================

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(session({
//   resave:true,
//   saveUninitialized:true,
//   secret:"secret"
// }))

// ======= Data base Connect ==============

mongoose.connect(
  "mongodb+srv://shreya:shreya@cluster0.5pc82cx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("conect");
  }
);

// ========== SignUp ================

app.post("/sign_up", async (req, res) => {
  try {
    let user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword,
    });
    const saveUser = await user.save();

    // res.status(200).json(saveUser);
    return res.redirect("index.html");
  } catch (error) {
    return res.redirect("login.html")
  }
});


// ========== Login ================

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.redirect("index.html");

    } else {
      return res.redirect("login.html")
    }
  } catch (error) {
    return res.redirect("login.html");
  }
});

// ==========contactUs================

app.post("/contact", async (req, res) => {
  try {
    let contact = new ContactUs({
      name: req.body.userName,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    });
    const saveDetail = await contact.save();

    // res.status(200).json(saveUser);
    return res.redirect("index.html");
  } catch (error) {
    res.status(400).json({ errors: error.message });
    return res.redirect("contact_us.html");
  }
});


app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    // res.send(req.session.user)
    return res.redirect("index.html");
  })
  .listen(5000);
