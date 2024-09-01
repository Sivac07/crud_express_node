import express from 'express';
import { createEmpDetail, deleteEmpById, getEmpDetails, getEmpDetailsById, updateEmpById} from '../Controllers/employee.controller.js';
const router = express.Router();


router.get('/getemp',getEmpDetails)
router.get('/:id',getEmpDetailsById)
router.post('/createemp',createEmpDetail)
router.put('/edit/:id',updateEmpById)
router.delete('/delete/:id',deleteEmpById)

export default router;