const { Team } = require("../models");

// team
const create_Team = async (reqBody) => {
  return Team.create(reqBody);
};

// Get team list
const get_Team_List = async (filter,options) => {
    return Team.find();
};

// Get Team by name
const get_Team_By_Name = async (team_name) => {
  return Team.findOne({ team_name });
};

// Get team details by id
const get_Team_By_Id = async (TeamId) => {
  return Team.findById(TeamId);
};

// update team
const update_Team = async (TeamId, reqBody) => {
  return Team.findByIdAndUpdate(TeamId, { $set: reqBody });
};

// Delete team
const delete_Team = async (TeamId) => {
  return Team.findByIdAndDelete(TeamId);
};

module.exports = {
    create_Team,
    get_Team_List,
    get_Team_By_Name,
    get_Team_By_Id,
    update_Team,
    delete_Team
}