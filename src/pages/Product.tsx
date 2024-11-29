import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/config";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/model/Product";

export default function Product() {
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/products`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(function (error) {
        alert(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-gray-500 w-10 h-10" />
    </div>
  ) : (
    <>
      <h1 className="font-bold text-2xl ml-12">Available Products</h1>
      <div className="grid grid-flow-row-dense lg:grid-cols-4 gap-4 p-4 md:grid-cols-2 sm:grid-flow-row">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}