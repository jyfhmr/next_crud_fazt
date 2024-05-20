import axios from "axios";
import ProductCard from "@/components/ProductCard";
async function loadProducts() {
  const result = axios.get("http://localhost:3000/api/products/");

  return result;
}

async function ProductsPage() {
  const products = await loadProducts();

  console.log("PRODUCTOS ", products.data);

  return (
    <div className="grid gap-4 grid-cols-4 text-black">
      {products.data.map((product) => (
        <ProductCard product={product}/>
      ))}
    </div>
  );
}

export default ProductsPage;
