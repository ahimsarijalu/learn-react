import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { baseUrl } from "@/config";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [recomendation, setRecommendation] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        toast({
          title: "You've encountered an error",
          description: error,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/products/category/${product?.category}`)
      .then((response) => {
        const filteredRecommendations = response.data.filter(
          (item: Product) => item.id !== product?.id
        );
        setRecommendation(filteredRecommendations);
      })
      .catch((error) => {
        toast({
          title: "You've encountered an error",
          description: error,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [product]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-gray-500 w-10 h-10" />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-12">Product not found</div>;
  }

  const isDiscounted = product.id % 2 === 0;
  const rawPrice = isDiscounted ? product.price * 0.7 : product.price;
  const price = Math.floor((rawPrice * 15848) / 10000) * 10000 + 9990;

  return (
    <>
      <div className="w-full min-h-full mx-auto p-6">
        <Card className="w-full flex flex-col lg:flex-row">
          <CardHeader className="flex-shrink-0 w-full lg:w-1/3">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full max-h-96 mb-4"
            />
          </CardHeader>

          <CardContent className="w-full lg:w-2/3 p-4 flex flex-col gap-2">
            <CardTitle className="text-left text-2xl font-bold mb-2">
              {product.title}
            </CardTitle>
            <div className="flex flex-row items-center mb-4 gap-4 content-center">
              <p
                className={`font-semibold text-black ${
                  isDiscounted
                    ? "line-through text-lg"
                    : "text-2xl"
                }`}
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(
                  Math.floor((product.price * 15848) / 10000) * 10000 + 9990
                )}
              </p>

              {isDiscounted ? (
                <p className={`text-2xl font-semibold text-red-500`}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(price)}
                </p>
              ) : (
                <></>
              )}
            </div>

            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.round(product.rating.rate)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.rate.toFixed(1)} / 5 ({product.rating.count})
              </span>
            </div>
            <div>
              <Badge
                variant={"outline"}
                className="hover:bg-zinc-600 hover:text-white text-sm px-4 py-2 mt-2 inline-block capitalize"
              >
                {product.category}
              </Badge>
            </div>

            <CardDescription className="text-gray-600 mb-4 mt-4 text-justify capitalize">
              {product.description}
            </CardDescription>
            <div className="flex flex-col gap-2 mt-12">
              <Button className="w-full min-h-12 bg-zinc-800 text-white hover:bg-zinc-600">
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white">
            <Loader2 className="animate-spin text-gray-500 w-10 h-10" />
          </div>
        ) : (
          <div className="mt-4">
            <h1 className="font-bold text-2xl ml-12">
              Another products in{" "}
              <span className="capitalize">{product.category}</span>
            </h1>
            <div className="grid grid-flow-row-dense lg:grid-cols-4 gap-4 p-4 md:grid-cols-2 sm:grid-flow-row">
              {recomendation.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
