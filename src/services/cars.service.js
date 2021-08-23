const getCar = () => {
 return  fetch('http://91.201.233.14//api/v1/cars')
        .then(value => value.json())
}


const createCar = (info) => {
 return fetch('http://91.201.233.14//api/v1/cars', {
  method: 'POST',
  body: JSON.stringify(info),

  headers: {
   'Content-type': 'application/json; charset=UTF=8',
  },
 })

     .then(response => response.json())

}


const deleteCarAPI = (id) => {
 return fetch('http://91.201.233.14/api/v1/cars/' + id, {
  method: 'DELETE'

 })

}


 const updateCarAPI = (info, id) => {
  return fetch('http://91.201.233.14/api/v1/cars/' + id , {
   method: 'PUT',
   body: JSON.stringify(info),
   headers: {
    'Content-type': 'application/json; charset=UTF=8',
   }

  })
      .then(response => getCar())

 }


export {getCar, createCar, deleteCarAPI, updateCarAPI}



