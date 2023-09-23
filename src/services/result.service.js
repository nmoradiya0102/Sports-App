const { Result } = require("../models");

// Result
const create_Result = async (reqBody) => {
  return Result.create(reqBody);
};

// Get Result list
const get_Result_List = async (filter,options) => {
    return Result.find();
};

// Get Result details by id
const get_Result_By_Id = async (ResultId) => {
  return Result.findById(ResultId);
};

// update Result
const update_Result = async (ResultId, reqBody) => {
  return Result.findByIdAndUpdate(ResultId, { $set: reqBody });
};

// Delete Result
const delete_Result = async (ResultId) => {
  return Result.findByIdAndDelete(ResultId);
};

module.exports = {
    create_Result,
    get_Result_List,
    get_Result_By_Id,
    update_Result,
    delete_Result
}