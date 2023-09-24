const { player } = require("../models");

const create_Player = async(reqbody) => {
    return player.create(reqbody);
}

const get_Player_By_Name = async(player_name) => {
    return player.findOne({player_name})
}

const get_Player_List = async() => {
    return player.find();
}

const get_Player_By_Id = async(PlayerId) => {
    return player.findById(PlayerId);
}

const update_Player = async(PlayerId,reqbody) => {
    return player.findByIdAndUpdate(PlayerId,{$set:reqbody});
}

const delete_Player = async(PlayerId) => {
    return player.findByIdAndDelete(PlayerId);
}

module.exports = {
    create_Player,
    get_Player_By_Name,
    get_Player_List,
    get_Player_By_Id,
    update_Player,
    delete_Player
}