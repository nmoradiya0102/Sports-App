const { Sports } = require("../models");

// Sports
const create_Sports = async (reqBody) => {
  return Sports.create(reqBody);
};

// Get Sports list
const get_Sports_List = async (filter,options) => {
    return Sports.find({$or:[{is_active:false}]});
};

// Get Sports by name
const get_Sports_By_Name = async (Sports_name) => {
  return Sports.findOne({ Sports_name });
};

// Get Sports details by id
const get_Sports_By_Id = async (Sports_Id) => {
  return Sports.findById(Sports_Id);
};

// update Sports
const update_Sports = async (Sports_Id, reqBody) => {
  return Sports.findByIdAndUpdate(Sports_Id, { $set: reqBody });
};

// Delete Sports
const delete_Sports = async (Sports_Id) => {
  return Sports.findByIdAndDelete(Sports_Id);
};

module.exports = {
    create_Sports,
    get_Sports_List,
    get_Sports_By_Name,
    get_Sports_By_Id,
    update_Sports,
    delete_Sports
}