const db = require('../models');
const Show = db.shows;

const addEvent = async (req, res) => {
    try {
        const data = await Show.create(req.body)
        res.status(201).json({ status: "success", message: data });

    }
    catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
}

const removeEvent = async (req, res) => {
    try {
        const showid = req.params.showid;
        const data = await Show.destroy({ where: { showid: showid } })
        res.status(200).json({ status: "success", message: "deleted successfully" })
    }
    catch (err) {
        res.status(500).json({ status: "fail", message: err });

    }

}
const showAllevent = async (req, res) => {
    try {
        const data = await Show.findAll({})
        res.send(200).json({ status: "success", data });
    }
    catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
}

const bookTicket = async (req, res) => {
    try {
        const showid = req.body.showid;
        const userid = req.body.userid;
        const noTicket = req.body.noTicket;

        // Find the show by showid
        const show = await Show.findOne({ where: { showid: showid } });

        if (!show) {
            return res.status(404).json({ error: 'Show not found' });
        }

        console.log('Before update:', show.ticketrem);


        let remTicket = show.ticketrem;

        remTicket = remTicket - noTicket;
        console.log('After update:', remTicket);
        if (remTicket < 0) {
            res.status(500).json({ status: "fail", message: "Housefull" })
        }
        show.ticketrem = remTicket;

        // Save the changes to the database
        await show.save();

        res.status(201).json({
            status: 'success',
            message: "Ticket Booked Successfully"
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
}




module.exports = { addEvent, removeEvent, showAllevent, bookTicket }