const { firstModel
   , secondModel } = require("../model/studentModel");

//get all items
exports.checkConnection = (req, res) => {
  res.status(200).json({ message: "route working" });
};
// create new row and save
exports.addData = async (req, res) => {
  const first = await firstModel.create({name:req.body.name}); // creates a new row and save it to item
  const second = await secondModel.create({totalmark:req.body.totalmark});
  res.status(201).json({
    success: true,
  });
};

