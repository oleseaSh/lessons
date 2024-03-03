import mongoose from 'mongoose';

const Barber = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    img: {type: String}
})

export default mongoose.model('Barber', Barber);