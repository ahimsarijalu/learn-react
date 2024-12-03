import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "@/model/Book";
import { baseUrlImage, baseUrlLaravel } from "@/config";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>(); // Get the book ID from the route
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBookDetail(id);
    }
  }, [id]);

  const fetchBookDetail = async (bookId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrlLaravel}/book/${bookId}`);
      setBook(response.data.data);
    } catch (err) {
      toast({
        title: "Error loading book details",
        description: `An unexpected error occurred: ${err}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-gray-500 w-10 h-10" />
      </div>
    );
  }

  if (!book) {
    return <p className="p-4">No book details available.</p>;
  }

  return (
    <div className="p-4">
      <Card className="max-w-3xl mx-auto shadow-md">
        <img
          src={`${baseUrlImage}/book/${book.cover}`}
          alt={book.name}
          className="w-full h-64 object-cover rounded-t-md"
        />
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{book.name}</CardTitle>
          <CardDescription className="text-lg">
            Category: {book.category_name}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Stock:</strong> {book.stock}
          </p>
          <p>
            <strong>Borrow Date:</strong> {book.borrow_date}
          </p>
          <p>
            <strong>Created At:</strong> {book.created_at}
          </p>
          <p>
            <strong>Last Updated:</strong> {book.updated_at}
          </p>
          <Button className="w-full">
            Borrow This Book
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
