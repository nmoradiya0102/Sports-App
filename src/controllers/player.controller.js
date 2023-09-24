const { playerService } = require("../services");

// Create Player
const create_Player = async(req,res) => {
    try {
        const reqbody = req.body;
        const PlayerExist = await playerService.get_Player_By_Name(reqbody.player_name);
        if(!PlayerExist){
            throw new Error("this name player already created..!");
        }
        res.status(200).json({
            succcess : true,
            message : " Player created successfully..!",
            data : Player
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

//  get player list
const get_Player_List = async(req,res) => {
    try {
        const PlayerList = await playerService.get_Player_List();
        if(!PlayerList){
          throw new Error("player list not found..!");
        }
        res.status(200).json({
          success: true,
          message: "Get player list successfully..!",
          data: PlayerList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

// Update  Player
const update_Player = async(req,res) => {
    try {
        const PlayerId = req.params.PlayerId;
        const reqbody = req.body;
        const PlayerExist = await playerService.get_Player_By_Id(PlayerId);
        if(!PlayerExist){
            throw new Error("Player not found..!");
        }
        res.status(200).json({
            succcess:true,
            message:"player updated successfully..!",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete  player
const delete_Player = async(req,res) => {
    try {
        const PlayerId = req.params.PlayerId;
        const PlayerExist = await playerService.get_Player_By_Id(PlayerId);
        if(!PlayerExist){
            throw new Error("player not found..!");
        }
        res.status(200).json({
            succcess:true,
            message:" player deleted successfully..!",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}



module.exports = {
    create_Player,
    get_Player_List,
    update_Player,
    delete_Player
}