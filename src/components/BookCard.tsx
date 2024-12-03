import { Book } from "@/model/Book";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { baseUrlImage } from "@/config";

export default function BookCard({
  name,
  stock,
  borrow_date,
  cover,
  category_name,
}: Book) {
  return (
    <Card className="w-full max-w-sm shadow-md">
      <img
        src={`${baseUrlImage}/book/${cover}`}
        alt={name}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Category: {category_name}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <strong>Stock:</strong> {stock}
        </p>
        <p>
          <strong>Borrow Date:</strong> {borrow_date}
        </p>
        <Button className="w-full">
          Borrow Book
        </Button>
      </CardContent>
    </Card>
  );
}
