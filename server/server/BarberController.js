import Barber from "./Barber.js";
import BarberService from "./BarberService.js";


class BarberController {
    async create(req, res) {
        try {
            const barberData = await BarberService.create(req.body)
            res.json(barberData)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const barbers = await BarberService.getAll()
            return res.json(barbers)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async getById(req, res){
        try{
            const barber = await BarberService.getById(req.params.id)
            return res.json(barber)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async updateBarber(req, res){
        try{
            const updateBarber = await BarberService.updateBarber(req.body)
            return res.json(updateBarber)
        } catch(e) {
            res.status(500).json(e);
        }
    }
    async deleteBarber(req, res){
        try{
          const barber = await BarberService.deleteBarber(req.params.id)
            return res.json(barber)
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new BarberController();