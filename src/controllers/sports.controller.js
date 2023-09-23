const { sportsService } = require("../services");

/** create Sports */
const create_Sports = async (req, res) => {
  try {
    const reqBody = req.body;
    const Sports = await sportsService.create_Sports(reqBody);
    if (!Sports) {
      throw new Error("Something went wrong ..!");
    }
    res.status(200).json({
      success: true,
      message: "Sports create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};


/** Get Sports list */
const get_Sports_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Sports_name: { $regex: search, $options: "i" } },
        { Sports_description : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await sportsService.get_Sports_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Sports list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** Delete Sports */
const delete_Sports = async (req, res) => {
  try {
    const Sports_Id = req.params.Sports_Id;
    const Sports_Exists = await sportsService.get_Sports_By_Id(Sports_Id);
    if (!Sports_Exists) {
      throw new Error("Sports not found!");
    }
    await sportsService.delete_Sports(Sports_Id);

    res.status(200).json({
      success: true,
      message: "Sports delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Sports */
const update_Sports = async (req, res) => {
  try {
    const reqBody = req.body;
    const Sports_Id = req.params.Sports_Id;
    const Sports_Exists = await sportsService.get_Sports_By_Id(Sports_Id);
    if (!Sports_Exists) {
      throw new Error("Sports not found!");
    }
    await sportsService.update_Sports(Sports_Id,reqBody);

    res.status(200).json({
      success: true,
      message: "Sports update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Sports,
  get_Sports_List,
  delete_Sports,
  update_Sports
};