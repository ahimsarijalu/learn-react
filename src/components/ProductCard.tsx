import { Product } from "@/model/Product";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Percent } from "lucide-react";
import AddToChart from "./AddToChart";
import "../App.css";

export default function ProductCard({
  product,
}: {
  product: Product;
  key: number;
}) {
  const navigate = useNavigate();

  const isDiscounted = product.id % 2 === 0;
  const rawPrice = isDiscounted ? product.price * 0.7 : product.price;
  const price = Math.floor((rawPrice * 15848) / 10000) * 10000 + 9990;

  return (
      <Card key={product.id} className="mx-4 my-4 flex flex-col justify-between card">
        <div>
          <CardHeader
            className="relative w-full h-96 overflow-hidden rounded-lg"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt=""
              className="object-contain w-full h-full"
              height={300}
            />
            {isDiscounted ? (
              <Badge
                variant="destructive"
                className="absolute top-2 right-4 px-3 py-1 text-sm rounded-md"
              >
                <Percent />
              </Badge>
            ) : (
              <></>
            )}
          </CardHeader>
          <CardContent className="mt-4 flex flex-col justify-between">
            <CardTitle className="text-start text-2xl font-bold mb-2">
              {product.title}
            </CardTitle>
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
            <CardDescription className="mt-2 text-justify normal-case line-clamp-3 text-md">
              {product.description}
            </CardDescription>
          </CardContent>
        </div>
        <CardFooter className="flex justify-between">
          <AddToChart product={product} />
        </CardFooter>
      </Card>
  );
}
