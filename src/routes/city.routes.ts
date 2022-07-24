//third-party packages and libs
import { Router } from 'express';

//setting up the router
const router = Router();

//importing app controller
import { fetchCityData } from '../controller/city.controller'

//receiving city name from client
router.get('/api/get-city/:cityName', fetchCityData);

//exporting section
export default router