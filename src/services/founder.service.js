const { Founder } = require("../models");

// Create Founder
const create_Founder = async (reqBody) => {
  return Founder.create(reqBody);
};

// Get Founder list
const get_Founder_List = async (filter, options) => {
  return Founder.find({$or:[{is_active:false}]});
};

// Get Founder details by id
const get_Founder_By_Id = async (Founder_Id) => {
  return Founder.findById(Founder_Id);
};

// Founder details update by id
const update_Founder = async (Founder_Id, reqBody) => {
  return Founder.findByIdAndUpdate(Founder_Id, { $set: reqBody });
};

// Delete usFounderer
const delete_Founder = async (Founder_Id) => {
  return Founder.findByIdAndDelete(Founder_Id);
};

module.exports = {
  create_Founder,
  get_Founder_List,
  get_Founder_By_Id,
  update_Founder,
  delete_Founder,
};