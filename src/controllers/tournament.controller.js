const { tournamentService } = require("../services");

/** create Tournament */
const create_Tournament = async (req, res) => {
  try {
    const reqBody = req.body;
    const Tournament = await tournamentService.create_Tournament(reqBody);
    if (!Tournament) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Tournament create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get Tournament list */
const get_Tournament_List = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { team_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await tournamentService.get_Tournament_List(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Tournament list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete Tournament */
const delete_Tournament = async (req, res) => {
  try {
    const TournamentId = req.params.TournamentId;
    const TournamentExists = await tournamentService.get_Tournament_By_Id(TournamentId);
    if (!TournamentExists) {
      throw new Error("Tournament not found!");
    }
    await tournamentService.delete_Tournament(TournamentId);

    res.status(200).json({
      success: true,
      message: "Tournament delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update Tournament */
const update_Tournament = async (req, res) => {
  try {
    const reqBody = req.body;
    const TournamentId = req.params.TournamentId;
    const TournamentExists = await tournamentService.get_Tournament_By_Id(TournamentId);
    if (!TournamentExists) {
      throw new Error("Tournament not found!");
    }
    await tournamentService.update_Tournament(TournamentId,reqBody);

    res.status(200).json({
      success: true,
      message: "Tournament update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
    create_Tournament,
    get_Tournament_List,
    delete_Tournament,
    update_Tournament
};
