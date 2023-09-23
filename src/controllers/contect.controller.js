const { contectService , emailService} = require("../services");

/** create Contect */
const create_Contect = async (req, res) => {
  try {
    const reqBody = req.body;
  const Contect = await contectService.create_Contect(reqBody);
    if (!Contect) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Contect create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Contect list */
const get_Contect_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    const getList = await contectService.get_Contect_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get contect list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Contect details by id */
const get_Contect_Details = async (req, res) => {
  try {
    const getDetails = await contectService.get_Contect_By_Id(req.params.ContectId);
    if (!getDetails) {
      throw new Error("Contect not found!");
    }

    res.status(200).json({
      success: true,
      message: "Contect details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Contect details update by id */
const update_Contect = async (req, res) => {
  try {
    const reqBody = req.body;
    const Contect_Id = req.params.Contect_Id;
    const Contect_Exists = await contectService.get_Contect_By_Id(Contect_Id);
    if (!Contect_Exists) {
      throw new Error("Contect not found!");
    }

    await contectService.update_Contect(Contect_Id, reqBody);

    res.status(200)
      .json({ success: true, message: "Contect details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Contect */
const delete_Contect = async (req, res) => {
  try {
    const Contect_Id = req.params.Contect_Id;
    const Contect_Exists = await contectService.get_Contect_By_Id(Contect_Id);
    if (!Contect_Exists) {
      throw new Error("Contect not found!");
    }
    await contectService.delete_Contect(Contect_Id);

    res.status(200).json({
      success: true,
      message: "Contect delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Send mail to reqested email */
const send_Mail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.send_Mail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong..!");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  create_Contect,
  get_Contect_List,
  get_Contect_Details,
  update_Contect,
  delete_Contect,
  send_Mail
};