import { Card, CardContent } from "@/components/ui/card";

export function StakeCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <h2>Stake</h2>
          <h3>10</h3>
        </div>
      </CardContent>
    </Card>
  );
}
