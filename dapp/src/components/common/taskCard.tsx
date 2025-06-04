import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TaskCard() {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader>
        <h2>Task Card</h2>
      </CardHeader>
      <CardContent>3</CardContent>
    </Card>
  );
}
