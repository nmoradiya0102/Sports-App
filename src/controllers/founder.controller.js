const { founderService } = require("../services");

/** create Founder */
const create_Founder = async (req, res) => {
  try {
    const reqBody = req.body;
    const Founder = await founderService.create_Founder(reqBody);
    if (!Founder) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Founder create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Founder list */
const get_Founder_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Founder_name: { $regex: search, $options: "i" } },
        { age : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await founderService.get_Founder_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Founder list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Founder */
const delete_Founder = async (req, res) => {
  try {
    const Founder_Id = req.params.Founder_Id;
    const Founder_Exists = await founderService.get_Founder_By_Id(Founder_Id);
    if (!Founder_Exists) {
      throw new Error("Founder not found!");
    }
    await founderService.delete_Founder(Founder_Id);

    res.status(200).json({
      success: true,
      message: "Founder delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Founder */
const update_Founder = async (req, res) => {
  try {
    const reqBody = req.body;
    const Founder_Id = req.params.Founder_Id;
    const Founder_Exists = await founderService.get_Founder_By_Id(Founder_Id);
    if (!Founder_Exists) {
      throw new Error("Founder not found!");
    }
    await founderService.update_Founder(Founder_Id,reqBody);

    res.status(200).json({
      success: true,
      message: "Founder update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Founder,
  get_Founder_List,
  delete_Founder,
  update_Founder
};