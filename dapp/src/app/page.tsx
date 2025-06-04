import { WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusCard } from "@/components/common/statusCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto pt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Web3 Todo List</h1>
          <h2>Gerencie sua tarefas com web3</h2>
        </div>

        <Button>
          <WalletIcon />
          <span>Connect Wallet</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
    </div>
  );
}
