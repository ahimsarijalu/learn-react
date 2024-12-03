import BookCard from "@/components/BookCard";
import { baseUrlLaravel } from "@/config";
import { toast } from "@/hooks/use-toast";
import { Book } from "@/model/Book";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LaravelPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const getBook = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrlLaravel}/book`)
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
      })
      .catch((err) => {
        toast({
          title: "You've encountered an error",
          description: err,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBook();
  }, []);

  if (isLoading || books === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-gray-500 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="p-4">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Link to={`/book/${book.book_id}`} key={book.book_id}>
              <BookCard
                key={book.book_id}
                book_id={book.book_id}
                name={book.name}
                stock={book.stock}
                borrow_date={book.borrow_date}
                cover={book.cover}
                category_name={book.category_name}
                category_id={book.category_id}
                created_at={book.created_at}
                updated_at={book.updated_at}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
