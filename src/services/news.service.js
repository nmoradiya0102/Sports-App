const { News } = require("../models");

// News
const create_News = async (reqBody) => {
  return News.create(reqBody);
};

// Get news list
const get_News_List = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return News.find();
};

// Get news details by id
const get_News_By_Id = async (NewsId) => {
  return News.findById(NewsId);
};

// update news
const update_News = async (NewsId, reqBody) => {
  return News.findByIdAndUpdate(NewsId, { $set: reqBody });
};

// Delete news
const delete_News = async (NewsId) => {
  return News.findByIdAndDelete(NewsId);
};

module.exports = {
    create_News,
    get_News_List,
    get_News_By_Id,
    update_News,
    delete_News
}