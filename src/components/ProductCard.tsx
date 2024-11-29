import { Product } from "@/model/Product";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { useNavigate } from "react-router-dom";
import { Percent, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ProductCard({
  product,
  key,
}: {
  product: Product;
  key: number;
}) {
  const navigate = useNavigate();

  const isDiscounted = product.id % 2 === 0;
  const rawPrice = isDiscounted ? product.price * 0.7 : product.price;
  const price = Math.floor((rawPrice * 15848) / 10000) * 10000 + 9990;

  return (
    <Card
      key={key}
      className="mx-4 my-4 flex flex-col justify-between"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div>
        <CardHeader className="relative w-full h-96 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt=""
            className="object-contain w-full h-full"
            height={300}
          />
          {isDiscounted ? (
            <Badge variant="destructive" className="absolute top-2 right-4 px-3 py-1 text-sm rounded-md">
              <Percent />
            </Badge>
          ) : (
            <></>
          )}
        </CardHeader>
        <CardContent className="mt-4 flex flex-col justify-between">
          <div className="flex flex-col items-center mb-4 content-center flex-wrap md:gap-4 gap-0 md:flex-row">
            <p
              className={`font-semibold text-black ${
                isDiscounted ? "line-through text-lg" : "text-2xl"
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
          <CardDescription className="mt-2 text-justify normal-case line-clamp-3">
            {product.description}
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <Button className="bg-zinc-800 text-white hover:bg-zinc-600 hover:text-white rounded-lg p-6 px-12 w-full">
          <ShoppingCart /> Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
