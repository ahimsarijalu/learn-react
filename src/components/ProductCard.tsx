import { Product } from "@/model/Product";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  product,
  key,
}: {
  product: Product;
  key: number;
}) {
  const navigate = useNavigate();

  return (
    <Card
      key={key}
      className="mx-4 my-4"
      onClick={() => navigate(`/product/${product.id}`)}
      
    >
      <CardHeader className="relative w-full h-96 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt=""
          className="object-contain w-full h-full"
          height={300}
        />
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="text-lg">{product.title}</CardTitle>
        <CardDescription className="mt-2 text-justify normal-case">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge className="px-4 py-2 bg-gray-200 mr-4 text-zinc-900 hover:text-white">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(product.price * 15848)}
        </Badge>

        <Button className="bg-zinc-800 text-white hover:bg-zinc-600 hover:text-white rounded-lg">
          <ShoppingCart /> Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
