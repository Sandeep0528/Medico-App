import express from 'express'
import authAdmin from '../middlewares/authAdmin.js'
import { addDoctor, adminDashboard, allDoctors, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js'
import { changeAvailablity } from '../controllers/doctorController.js'
import Upload from '../middlewares/multer.js'
// import { addDoctor } from '../controllers/adminController.js';




const adminRouter = express.Router()

adminRouter.post("/login", loginAdmin)
// adminRouter.post("/add-doctor", Upload.single('image'), addDoctor)
adminRouter.post("/add-doctor", authAdmin, Upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)



export default adminRouter;