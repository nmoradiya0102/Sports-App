const { Contect } = require("../models");

// Create Contect
const create_Contect = async (reqBody) => {
  return Contect.create(reqBody);
};

// Get Contect list
const get_Contect_List = async (filter, options) => {
  return Contect.find({$or:[{is_active:false}]});
};

// Get Contect by email
const get_Contect_By_Email = async (email) => {
  return Contect.findOne({ email });
};

// Get Contect details by id
const get_Contect_By_Id = async (Contect_Id) => {
  return Contect.findById(Contect_Id);
};

// Contect details update by id
const update_Contect = async (Contect_Id, reqBody) => {
  return Contect.findByIdAndUpdate(Contect_Id, { $set: reqBody });
};

// Delete Contect
const delete_Contect = async (Contect_Id) => {
  return Contect.findByIdAndDelete(Contect_Id);
};

module.exports = {
  create_Contect,
  get_Contect_List,
  get_Contect_By_Id,
  update_Contect,
  get_Contect_By_Email,
  delete_Contect,
};