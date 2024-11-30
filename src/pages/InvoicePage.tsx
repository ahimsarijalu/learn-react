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

export default function InvoicePage() {
  const invoices = [
    {
      invoice: "INV0000001",
      paymentStatus: "Paid",
      totalAmount: "Rp 250.000",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV0000002",
      paymentStatus: "Pending",
      totalAmount: "Rp 150.000",
      paymentMethod: "QRIS",
    },
    {
      invoice: "INV0000003",
      paymentStatus: "Unpaid",
      totalAmount: "Rp 350.000",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV0000004",
      paymentStatus: "Paid",
      totalAmount: "Rp 450.000",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV0000005",
      paymentStatus: "Paid",
      totalAmount: "Rp 550.000",
      paymentMethod: "QRIS",
    },
    {
      invoice: "INV0000006",
      paymentStatus: "Pending",
      totalAmount: "Rp 200.000",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV0000007",
      paymentStatus: "Unpaid",
      totalAmount: "Rp  300.000",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="mx-4 mt-4">
      <Table className="text-center">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-zinc-300">
          <TableRow>
            <TableHead className="w-[100px] font-bold ps-12 text-center">
              Invoice
            </TableHead>
            <TableHead className="text-center font-bold">Status</TableHead>
            <TableHead className="text-center font-bold">Method</TableHead>
            <TableHead className="px-12 text-right font-bold">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-center">
                {invoice.invoice}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    invoice.paymentStatus == "Paid"
                      ? "bg-green-300"
                      : invoice.paymentStatus == "Unpaid"
                      ? "bg-red-300"
                      : "bg-yellow-200"
                  }
                >
                  {invoice.paymentStatus}
                </Badge>
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right pr-12">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-zinc-500 text-white">
          <TableRow>
            <TableCell className="font-bold ps-12" colSpan={3}>Total</TableCell>
            <TableCell className="text-right pe-12 font-black">Rp 2.500.000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
