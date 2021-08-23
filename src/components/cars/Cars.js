import Car from "../car/Car";
import {useEffect, useState} from "react";
import {createCar, deleteCarAPI, getCar} from "../../services/cars.service";

export default function Cars(){

    const currentYear = new Date().getFullYear()


    const [cars, setCars] = useState([])

    let [model, setModel] = useState('')
    let [price, setPrice] = useState('')
    let [year, setYear] = useState('')


    const carInfo = {
        model: model,
        price: +price,
        year: +year
    }


    const save = (e) => {
        e.preventDefault()
        createCar(carInfo)
        setModel('')
        setPrice('')
        setYear('')

    }


    useEffect(() => {
        getCar().then(value => setCars([...value]))



    }, [cars])




    let onModelChange = (e) => {
        if  (e.target.value.length >= 1 && e.target.value.length <= 20 && !(e.target.value.indexOf(' ') >= 0) ){
            console.log('Good')
            setModel(e.target.value)
            console.log(e.target.value )
        }

        else{
            console.log('Error')
            e.preventDefault()
        }
    }
    let onPriceChange = (e) => {

        if (e.target.value >= 0){
            setPrice(e.target.value)
        } else{
            console.log('Errror')
            e.preventDefault()
        }
    }
    let onYearChange = (e) => {
        if ( e.target.value < currentYear + 1 ){
            setYear(e.target.value)
        }
        else{
            console.log('Not good')
        }
    }



    let deleteCar = (id) => {
         deleteCarAPI(id).then(value => console.log(value))


    }


    return(
        <div>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
                <input type="number" name={'year'} value={year} onChange={onYearChange}/>
                <input type="submit"/>
            </form>


            {
                cars.map(value => {
                    return <Car key={value.id} items={value} deleteCar={deleteCar}/>
                })
            }
        </div>
    )
}