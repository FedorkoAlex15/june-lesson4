import Car from "../car/Car";
import {useEffect, useState} from "react";
import {createCar, deleteCarAPI, getCar, updateCarAPI} from "../../services/cars.service";

export default function Cars(){

    const currentYear = new Date().getFullYear()


    const [cars, setCars] = useState([])

    let [model, setModel] = useState('')
    let [price, setPrice] = useState('')
    let [year, setYear] = useState('')




    const save = (e) => {
        e.preventDefault()
        createCar({
            model: model,
            price: price,
            year: year
         }).then(value => setCars([...cars, value]))


        setModel('')
        setPrice('')
        setYear('')

    }

    useEffect(() => {
        getCar().then(value => setCars([...value]))



    }, [])




    let onModelChange = (e) => {
        if  (e.target.value.length >= 1 && e.target.value.length <= 20 && !(e.target.value.indexOf(' ')  >= 0) ){
            setModel(e.target.value)
        }

        else{
            e.preventDefault()
            console.log('bad')
        }
    }
    let onPriceChange = (e) => {
        if (e.target.value >= 0){
            setPrice(e.target.value)
        } else{
            e.preventDefault()
        }
    }
    let onYearChange = (e) => {
        if ( e.target.value < currentYear + 1 ){
            setYear(e.target.value)
        }
        else{
        e.preventDefault()
        }
    }



    const deleteCar = (id) => {
         deleteCarAPI(id)
       setCars( cars.filter(value => value.id !== id))


    }


    const updateCar = (id) => {
        updateCarAPI({
            model: model,
            price: price,
            year: year}, id).then(value => setCars(value))
            .catch(reason => console.error(reason))

    }

console.log(cars)

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
                    return <Car key={value.id} items={value} deleteCar={deleteCar} updateCar={updateCar}/>
                })
            }
        </div>
    )
}