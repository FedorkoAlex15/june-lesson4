export default function Car({items: {id, model, price, year}, deleteCar}){

const onDeleteCar = () => {
    deleteCar(id)
}



    return(
        <div>
            <div>{id} - {model} - {price} - {year} </div>
            <button onClick={onDeleteCar}>Delete</button>
            <hr/>
        </div>
    )
}