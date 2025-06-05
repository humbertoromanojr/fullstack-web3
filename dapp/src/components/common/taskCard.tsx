import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Badge } from "../ui/badge";

interface TaskCardProps {
  title: string;
  description: string;
  dateCreated: string;
  expirationDate: string;
  stake: number;
}

export function TaskCard({
  title,
  description,
  dateCreated,
  expirationDate,
  stake,
}: TaskCardProps) {
  return (
    <Card>
      <CardHeader className="flex">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
        <Badge variant="default">Pending</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <div className="flex gap-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold">Date created:</span>
            {dateCreated}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold">Expiration date:</span> {expirationDate}
          </p>
        </div>
        <span>{stake} wei</span>
      </CardFooter>
    </Card>
  );
}
