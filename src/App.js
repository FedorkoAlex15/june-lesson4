import logo from './logo.svg';
import './App.css';

import {createCar, getCar} from "./services/cars.service";
import {useEffect, useState} from "react";
import Cars from "./components/cars/Cars";

function App() {
    // const currentYear = new Date().getFullYear()
    //
    //
    // const [cars, setCars] = useState([])
    //
    // let [model, setModel] = useState('')
    // let [price, setPrice] = useState('')
    // let [year, setYear] = useState('')
    //
    //
    // const carInfo = {
    //     model: model,
    //     price: +price,
    //     year: +year
    // }
    //
    //
    // const save = (e) => {
    //     e.preventDefault()
    //     createCar(carInfo)
    //     setModel('')
    //     setPrice('')
    //     setYear('')
    //
    // }
    //
    //
    // useEffect(() => {
    //     getCar().then(value => setCars([...value]))
    //
    //
    //
    // }, [cars])
    //
    //
    //
    //
    // let onModelChange = (e) => {
    //     if  (e.target.value.length >= 1 && e.target.value.length <= 20 && !(e.target.value.indexOf(' ') >= 0) ){
    //         console.log('Good')
    //         setModel(e.target.value)
    //         console.log(e.target.value )
    //     }
    //
    //     else{
    //         console.log('Error')
    //        e.preventDefault()
    //     }
    // }
    // let onPriceChange = (e) => {
    //
    //     if (e.target.value >= 0){
    //         setPrice(e.target.value)
    //     } else{
    //         console.log('Errror')
    //         e.preventDefault()
    //     }
    // }
    // let onYearChange = (e) => {
    //     if ( e.target.value < currentYear + 1 ){
    //         setYear(e.target.value)
    //     }
    //     else{
    //         console.log('Not good')
    //     }
    // }



    return (
        <div className="App">
            {/*<form onSubmit={save}>*/}
            {/*    <input type="text" name={'model'} value={model} onChange={onModelChange}/>*/}
            {/*    <input type="number" name={'price'} value={price} onChange={onPriceChange}/>*/}
            {/*    <input type="number" name={'year'} value={year} onChange={onYearChange}/>*/}
            {/*    <input type="submit"/>*/}
            {/*</form>*/}


            {/*{*/}
            {/*    cars.map(value => {*/}
            {/*        return <Cars items={cars}/>*/}
            {/*    })*/}
            {/*}*/}
            <Cars/>

        </div>
    );
}


export default App;
