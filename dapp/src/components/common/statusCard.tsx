import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  value: number;
}

export function StatusCard({ title, value }: StatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <h1 className="font-bold">{title}</h1>
      </CardHeader>
      <CardContent>
        <h2>{value}</h2>
      </CardContent>
    </Card>
  );
}
