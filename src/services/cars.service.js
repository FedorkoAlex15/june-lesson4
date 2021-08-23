const getCar = () => {
 return  fetch('http://91.201.233.14//api/v1/cars')
        .then(value => value.json())
}


const createCar = (carInfo) => {
 fetch('http://91.201.233.14//api/v1/cars', {
  method: 'POST',
  body: JSON.stringify(carInfo),

  headers: {
   'Content-type': 'application/json; charset=UTF=8',
  },
 })

     .then(response => response.json())
      .then(json => console.log(json))


}


const deleteCarAPI = (id) => {
   return fetch('http://91.201.233.14/api/v1/cars/' + id , {
    method: 'DELETE'

   })



}


export {getCar, createCar, deleteCarAPI}



