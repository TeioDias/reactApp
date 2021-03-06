const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//Controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);

routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard',DashboardController.show);

routes.post('/spots/:spot_id/bookings',BookingController.store);
/* routes.post('/users',(req,res)=>{
    //return res.json({message:"Hello Teste"});
    
    return res.json(req.body);
}); */

module.exports = routes;