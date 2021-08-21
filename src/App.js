import logo from './logo.svg';
import './App.css';

import {createCar, getCar} from "./services/services/cars.service";
import {useEffect, useState} from "react";

function App() {

    const [cars, setCars] = useState([])

    let [model, setModel] = useState('')
    let [price, setPrice] = useState(0)
    let [year, setYear] = useState(0)


    const carInfo = {
        model: model,
        price: price,
        year: year
    }


    const save = (e) => {
        e.preventDefault()
        createCar(carInfo)

    }


    useEffect(() => {
        getCar().then(value => setCars([...value]))

    }, [])


    // useEffect(() => {
    //     createCar(carInfo).then(value => setCars(value))
    // }, [])
    // //



    let onModelChange = (e) => {
        setModel(e.target.value)
    }
    let onPriceChange = (e) => {
        setPrice(e.target.value)
    }
    let onYearChange = (e) => {
        setYear(e.target.value)
    }




    console.log(cars)


    return (
        <div className="App">
            <form onSubmit={save}>
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
                <input type="number" name={'year'} value={year} onChange={onYearChange}/>
                <input type="submit"/>
            </form>


            {
                cars.map(value => {
                    return <div>{value.model}</div>
                })
            }

        </div>
    );
}


export default App;
