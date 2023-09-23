const { resultService } = require("../services");

/** create Result */
const create_Result = async (req, res) => {
  try {
    const reqBody = req.body;
    const Result = await resultService.create_Result(reqBody);
    if (!Result) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Result create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Result list */
const get_Result_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { game_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await resultService.get_Result_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get game_name list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete game_name */
const delete_Result = async (req, res) => {
  try {
    const ResultId = req.params.ResultId;
    const ResultExists = await resultService.get_Result_By_Id(ResultId);
    if (!ResultExists) {
      throw new Error("Result not found!");
    }
    await resultService.delete_Result(ResultId);

    res.status(200).json({
      success: true,
      message: "Result delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Result */
const update_Result = async (req, res) => {
  try {
    const reqBody = req.body;
    const ResultId = req.params.ResultId;
    const ResultExists = await resultService.get_Result_By_Id(ResultId);
    if (!ResultExists) {
      throw new Error("Result not found!");
    }
    await resultService.update_Result(ResultId,reqBody);

    res.status(200).json({
      success: true,
      message: "Result update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Result,
  get_Result_List,
  delete_Result,
  update_Result

};