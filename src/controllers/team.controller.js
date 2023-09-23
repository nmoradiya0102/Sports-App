const { teamService } = require("../services");

/** create team */
const create_Team = async (req, res) => {
  try {
    const reqBody = req.body;
    const Team = await teamService.create_Team(reqBody);
    if (!Team) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Team create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get team list */
const get_Team_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { team_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await teamService.get_Team_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get team list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete team */
const delete_Team = async (req, res) => {
  try {
    const TeamId = req.params.TeamId;
    const TeamExists = await teamService.get_Team_By_Id(TeamId);
    if (!TeamExists) {
      throw new Error("team not found!");
    }
    await teamService.deleteTeam(TeamId);

    res.status(200).json({
      success: true,
      message: "Team delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update team */
const update_Team = async (req, res) => {
  try {
    const reqBody = req.body;
    const TeamId = req.params.TeamId;
    const TeamExists = await teamService.get_Team_By_Id(TeamId);
    if (!TeamExists) {
      throw new Error("Team not found!");
    }
    await teamService.update_Team(TeamId,reqBody);

    res.status(200).json({
      success: true,
      message: "Team update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_Team,
  get_Team_List,
  delete_Team,
  update_Team

};