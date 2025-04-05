import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type PlanKey = "Beta" | "Gamma" | "Omega" | "Turbo" | "Custom";

const links: Record<PlanKey, string> = {
  Beta: "https://reachfast.chargebee.com/pages/v3/pcuQJ57SF8XxiApcuylVLvX4vkRpzyoJ3D/cart",
  Gamma: "https://reachfast.chargebee.com/pages/v3/cFE67233BVVSbcZdqFzOqaNhmJPCLixE/cart",
  Omega: "https://reachfast.chargebee.com/pages/v3/zE8bu8SkesnyyKzCQre4BP8et2V5jysj/cart",
  Turbo: "https://reachfast.chargebee.com/pages/v3/elDIGKomfP4vSoKGScd7gYsQubvukD6JO/cart",
  Custom: "https://forms.gozen.io/BU9FH0NH2LuAHYoOfqrm",
};

type FeatureValue = string | boolean;

interface FeatureRow {
  label: string;
  values: FeatureValue[];
}

const features: FeatureRow[] = [
  { label: "Price", values: ["$708", "$1,416", "$2,088", "$4,680", "Min $5k/year"] },
  { label: "Number of Credits", values: ["900", "1800", "3600", "5000", "Custom"] },
  { label: "Price Per Credit", values: ["$0.79", "$0.79", "$0.58", "$0.94", "Custom"] },
  { label: "Free Emails", values: [true, true, true, true, true] },
  { label: "Bulk Upload Search", values: [true, true, true, true, true] },
  { label: "100% Accuracy Guarantee", values: [true, true, true, true, true] },
  { label: "API Access", values: [false, false, true, true, true] },
  { label: "Dedicated Account Manager", values: [false, false, false, false, true] },
  { label: "Turbo Search Functionality", values: [false, false, false, true, true] },
];

function App(): JSX.Element {
  const open = (url: string): void => {
    window.location.href = url;
  };

  return (
    <div className="p-4 my-20 max-w-7xl mx-auto">
      <h2 className="m-4 text-center text-4xl font-semibold">Annual Pricing</h2>
      <div className="overflow-x-auto rounded-md border shadow-sm">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-lg">Plan</TableHead>
              <TableHead className="font-bold text-lg">Beta</TableHead>
              <TableHead className="font-bold text-lg">Gamma</TableHead>
              <TableHead className="font-bold text-lg">Omega</TableHead>
              <TableHead className="font-bold text-lg">Turbo</TableHead>
              <TableHead className="font-bold text-lg">Custom</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((row, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{row.label}</TableCell>
                {row.values.map((val, j) => (
                  <TableCell key={j}>
                    {typeof val === "boolean" ? (
                      val ? (
                        <Check className="text-green-600" />
                      ) : (
                        <X className="text-red-500" />
                      )
                    ) : (
                      val
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              {(Object.keys(links) as PlanKey[]).map((plan) => (
                <TableCell key={plan}>
                  <Button onClick={() => open(links[plan])}>Buy Now</Button>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default App;
