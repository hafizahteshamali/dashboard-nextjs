
'use client';

import Card from "@/app/modules/mycomponents/Card/Card";
import { useEffect, useState } from "react";

const page = () => {

  const [isProducts, setIsProducts] = useState([]);

  const getData = async ()=>{
    try {
      const data = await fetch('https://fakestoreapi.in/api/products')
      .then((data)=>{
        return data.json();
      })
      .then((Response)=>{
        setIsProducts(Response?.products)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="flex justify-center flex-wrap gap-3 w-full p-6">
      {isProducts.map((item, index)=>{
        return(
          <Card key={index} data={item}/>
        )
      })}
    </div>
  )
}

export default page
