import Router from 'express';
import BarberController from "./BarberController.js";

const router = new Router();

const { create, getAll, getById, updateBarber, deleteBarber} = BarberController;

router.post('/barbers', create)
router.get('/barbers', getAll)
router.get('/barbers/:id', getById)
router.put('/barbers', updateBarber)
router.delete('/barbers/:id', deleteBarber)

export default router;