import axios from "axios"
import Buttons from "./Buttons"
async function loadProduct(productId){
  const response = await axios.get("http://localhost:3000/api/products/"+productId)
  return response.data
}

export default async function page(props) {

   const product = await loadProduct(props.params.id)



  return (
    <div className="bg-white text-black">
      {props.params.id}

       <div>
        id:{product.id}
       </div>
       <div>
        name:{product.name}
       </div>
       <div>
        desc:{product.description}
       </div>
       <div>
        precio:{product.price}
       </div>
       <div>
        fecha:{product.created_at}
       </div>
    
    <Buttons productId = {product.id}/>

    </div>
  )
}
