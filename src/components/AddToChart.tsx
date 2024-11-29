import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { useState } from "react";
import { Product } from "@/model/Product";

export default function AddToChart({ product }: { product: Product }) {
  const [total, setTotal] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function onClick(adjustment: number) {
    setTotal(Math.max(0, Math.min(20, total + adjustment)));
  }

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-zinc-800 text-white hover:bg-zinc-600 hover:text-white rounded-lg p-6 px-12 w-full">
          <ShoppingCart /> Buy
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Ready to check out?</DrawerTitle>
            <DrawerDescription>
              Add <strong>{product.title}</strong> to your cart and continue
              shopping.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-1)}
                  disabled={total <= 0}
                >
                  <Minus />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {total}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground mt-4">
                    pcs
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(1)}
                  disabled={total >= 20}
                >
                  <Plus />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button
                onClick={() => {
                  setIsDrawerOpen(false)
                  toast({
                    title: "Successfully added to your chart",
                    description: `${total} pcs of ${product.title}`,
                  });
                }}
                disabled={total <= 0}
              >
                <ShoppingCart /> Add
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
