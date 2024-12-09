import React from "react"
import Navbar from"@/components/navbar"
export default function Cars(){

const carData=[
    {id:1,name:"Honda",price:8000000,description:"luxury Car",image:"/honda city.jpeg"},
    {id:2,name:"Civic",price:7000000,description:"Civic Car",image:"/honda civic.jpeg"},
    {id:3,name:"Suzuki",price:7500000,description:"SuzukiCar",image:"/suzuki.jpeg"},
    {id:4,name:"Corolla",price:9000000,description:"Toyota Car",image:"/toyota corolla.jpeg"},
    {id:5,name:"Vitz",price:8500000,description:"Vitz Car",image:"/toyota vitz.jpeg"},
    {id:6,name:"Yaris",price:7800000,description:"Yaris Car",image:"/toyota yaris.jpeg"}
]

    return(
        <div>
        {/* <div className="cars w-[100px] h-[100px]"> */}
        <div className="cars ">
            {carData.map((car)=>( 
        <div key={car.id} className="car-card">
        <img src={car.image} alt={car.name}/>
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <div className="price">${car.price}</div>
        <button>Add to cart</button>


        </div>

            ))}
        </div>
    
    
     </div>
     )

}

<section className="cars grid grid-cols-3 gap-5 mt-10 mx-12">
<div className="car-card bg-white p-5 rounded-lg shadow-md text-center">
  <img src="car.jpg" alt="Car" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105">
  <h3 className="mt-4">Car Name</h3>
  <p className="text-gray-600 text-sm">Description of the car</p>
  <div className="price text-xl font-bold text-blue-500">$20,000</div>
  <button className="mt-3 py-2 px-4 bg-purple-500 text-white rounded-md cursor-pointer transition ease-in-out duration-300 hover:bg-green-800">Buy Now</button>
</div>
</section>