"use client";
import { useState, useRef,useEffect } from "react";
import axios from "axios"
import {useRouter, useParams} from "next/navigation"

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    //console.log(e.target.value, e.target.name);
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };

  useEffect(()=>{
       if(params.id ){
        console.log("cargando datos")
        axios.get("/api/products")
       }
  },[])

  const handleSubmit = async (e) =>{
  e.preventDefault()
  console.log(product)

  const res = await axios.post("/api/products", product)
  console.log(res.data)
  form.current.reset()
  router.push("/products")
  }

  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}
    ref={form}
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Name
      </label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />

      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Price:{" "}
      </label>
      <input
        name="price"
        type="text"
        placeholder="00.00"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />

      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product Description:
      </label>
      <textarea
        name="description"
        rows={3}
        type="text"
        placeholder="descripcion"
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bopy-2 px-4 rounded">
        Save Product
      </button>
    </form>
  );
}

export default ProductForm;
