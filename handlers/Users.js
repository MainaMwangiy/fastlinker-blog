const db = require("../models/Users");

exports.Home = async (req,res,next) => {
  return res.json({
    success: true,
    message: " Welcome to fastlinker Blog"
  })
}

exports.AddUsers = async (req, res, next) => {
  try {
    const user = await db.create({
      name: req.body.name,
      password: req.body.password,
    });

    res.status(201).json({
      success: true,
      status: "Added a new User successfully.",
      data: user,
    });
  } catch (err) {
    if (err) {
      return res.json({
        success: false,
        err: "Failed to Add a new User",
      });
    }
    next(err);
  }
};

exports.LoginUser = async (req, res, next)  =>{
  
}
