import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/config";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/model/Product";
import { toast } from "@/hooks/use-toast";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        toast({
          title: "You've encountered an error",
          description: error,
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl ml-12 mt-4">Available Products</h1>
      {isLoading ? (
        <div className="grid grid-flow-row-dense lg:grid-cols-3 gap-4 p-4 md:grid-cols-2 sm:grid-flow-row xl:grid-cols-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      ) : (
        <div className="grid grid-flow-row-dense lg:grid-cols-3 gap-4 p-4 md:grid-cols-2 sm:grid-flow-row xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
