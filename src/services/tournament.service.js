const { Tournament } = require("../models");

// Tournament
const create_Tournament = async (reqBody) => {
  return Tournament.create(reqBody);
};

// Get Tournament list
const get_Tournament_List = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Tournament.find();
};

// Get Tournament details by id
const get_Tournament_By_Id = async (TournamentId) => {
  return Tournament.findById(TournamentId);
};

// update Tournament
const update_Tournament = async (TournamentId, reqBody) => {
  return Tournament.findByIdAndUpdate(TournamentId, { $set: reqBody });
};

// Delete Tournament
const delete_Tournament = async (TournamentId) => {
  return Tournament.findByIdAndDelete(TournamentId);
};

module.exports = {
    create_Tournament,
    get_Tournament_List,
    get_Tournament_By_Id,
    update_Tournament,
    delete_Tournament
}