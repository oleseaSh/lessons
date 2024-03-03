import Barber from "./Barber.js";

class BarberService {
    async create(barber) {
        const barberData = await Barber.create(barber)
        return barberData;
    }

    async getAll() {
            const barbers = await Barber.find()
            return barbers;

    }
    async getById(id){

            if(!id){
                throw new Error('ID not found')
            }
            const barber = await Barber.findById(id)
            return barber;

    }
    async updateBarber(barber){

            if(!barber._id) {
                throw new Error('ID not found')
            }
            const updateBarber = await Barber.findByIdAndUpdate(barber._id, barber, {new: true})
            return updateBarber;

    }
    async deleteBarber(id){
         if(!id) {
             throw new Error('ID not foune')
         }
            const barber = await Barber.findByIdAndDelete(id)
            return barber

    }
}

export default new BarberService();