import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";

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
    </div>
  );
}
