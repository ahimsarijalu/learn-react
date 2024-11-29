import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Invoice() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "Rp 250.000",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "Rp 150.000",
      paymentMethod: "QRIS",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "Rp 350.000",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "Rp 450.000",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "Rp 550.000",
      paymentMethod: "QRIS",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "Rp 200.000",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "Rp  300.000",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="mx-12">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-zinc-300">
          <TableRow>
            <TableHead className="w-[100px]  font-bold">Invoice</TableHead>
            <TableHead className=" font-bold">Status</TableHead>
            <TableHead className=" font-bold">Method</TableHead>
            <TableHead className="pr-4 text-right font-bold">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    invoice.paymentStatus == "Paid"
                      ? "bg-green-500"
                      : invoice.paymentStatus == "Unpaid"
                      ? "bg-red-500"
                      : "bg-yellow-300"
                  }
                >
                  {invoice.paymentStatus}
                </Badge>
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-zinc-500 text-white">
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Rp 2.500.000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
