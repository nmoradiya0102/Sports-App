const { newsService } = require("../services");

/** create news */
const create_News = async (req, res) => {
  try {
    const reqBody = req.body;
    const News = await newsService.create_News(reqBody);
    if (!News) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "News create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get News list */
const get_News_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { news_company_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await newsService.get_news_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get News list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete news */
const delete_News = async (req, res) => {
  try {
    const NewsId = req.params.NewsId;
    const NewsExists = await newsService.get_News_By_Id(NewsId);
    if (!NewsExists) {
      throw new Error("news not found!");
    }
    await newsService.delete_News(NewsId);

    res.status(200).json({
      success: true,
      message: "News delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update news */
const update_News = async (req, res) => {
  try {
    const reqBody = req.body;
    const NewsId = req.params.NewsId;
    const NewsExists = await newsService.get_News_By_Id(NewsId);
    if (!NewsExists) {
      throw new Error("News not found!");
    }
    await newsService.update_News(NewsId,reqBody);

    res.status(200).json({
      success: true,
      message: "News update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_News,
  get_News_List,
  delete_News,
  update_News

};