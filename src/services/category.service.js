const { Category } = require("../models");

// category
const create_Category = async (reqBody) => {
  return Category.create(reqBody);
};

// Get category list
const get_Category_List = async (filter,options) => {
    return Category.find();
};

// Get Category by name
const get_Category_By_Name = async (category_name) => {
  return Category.findOne({ category_name });
};

// Get Category details by id
const get_Category_By_Id = async (categoryId) => {
    return Category.find().populate("Team");
  };

// update Category
const update_Category = async (CategoryId, reqBody) => {
  return Category.findByIdAndUpdate(CategoryId, { $set: reqBody });
};

// Delete category
const delet_Category = async (CategoryId) => {
  return Category.findByIdAndDelete(CategoryId);
};

module.exports = {
    create_Category,
    get_Category_List,
    get_Category_By_Name,
    get_Category_By_Id,
    update_Category,
    delet_Category
}
