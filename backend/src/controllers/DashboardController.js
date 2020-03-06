const Spot = require('../models/Spot');

module.exports = {
    async show(req, res){
        const {user_id} = req.query;
        
        const spot = await Spot.find({user: user_id});

        return res.json(spot);
    }
};  