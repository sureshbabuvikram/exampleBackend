import express from 'express'
import { createEmployee, getAllEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById } from "../Controllers/employee.controller.js"; 

const router= express.Router()

router.post('/create/emp',createEmployee)
router.get('/emp',getAllEmployee)
router.get('/empid/:id', getEmployeeById)
router.put('/edit/emp/:id',updateEmployeeById)
router.delete('/delete/emp/:id', deleteEmployeeById)


export default router;