//third-party packages and libs
import { Request, Response, NextFunction } from 'express'
import needle from 'needle';

//logic section
const fetchCityData = async (req: Request, res: Response, next: NextFunction) => {
    //extracting city name from query parameters
    const cityName: string = req.params.cityName
    const key = process.env.KEY
    let finalTargetUrl: string = `http://api.weatherstack.com/current?access_key=${key}&query=${cityName}`
    try{
        const resp = await needle('get', finalTargetUrl)
        console.log(resp.body)
    }catch(error){
        console.log(error)
    }
}

//exporting section
export  { fetchCityData }

