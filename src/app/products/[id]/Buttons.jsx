"use client"

import React from 'react'
import axios from 'axios'
import  { useRouter } from 'next/navigation'

function Buttons(props) {

  const router = useRouter()

  return (
    <div>
         <button className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded" onClick={async()=>{
          console.log(props.productId)

          if(confirm("are you sure?")){
            console.log("borrando . . .")
           const result =await axios.delete("/api/products/"+props.productId)

           console.log(result)
           router.push("/products")
           router.refresh()
           return

          }

         }}>
        Borrar
       </button>
       <button className="bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded">
        Editar
       </button>
    </div>
  )
}

export default Buttons
