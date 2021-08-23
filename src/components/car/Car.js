export default function Car({items: {id, model, price, year}, deleteCar, updateCar}){




    return(
        <div>
            <div>{id} - {model} - {price} - {year} </div>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => updateCar(id)}>Update</button>
            <hr/>
        </div>
    )
}