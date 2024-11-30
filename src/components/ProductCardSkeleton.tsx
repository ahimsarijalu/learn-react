import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton"; 

export default function ProductCardSkeleton() {
  return (
    <Card className="mx-4 my-4 flex flex-col justify-between card">
      <div>
        <CardHeader className="relative w-full h-96 overflow-hidden rounded-lg">
          <Skeleton className="w-full h-full" />
        </CardHeader>
        <CardContent className="mt-4 gap-2 flex flex-col justify-between">
          <CardTitle className="">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full" />
          </CardTitle>
          <Skeleton className="mt-4 h-8 w-5/6" />
          <div className="space-y-2 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        {/* Skeleton for add to cart button */}
        <Skeleton className="w-full h-12 rounded-md" />
      </CardFooter>
    </Card>
  );
}
