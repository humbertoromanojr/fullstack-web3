"use client";

import React, { useEffect, useState } from "react";
import { PlusIcon, WalletIcon, XIcon } from "lucide-react";
import { anvil } from "viem/chains";
import { createWalletClient, custom } from "viem";

import { Button } from "@/components/ui/button";
import { StatusCard } from "@/components/common/statusCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StakeCard } from "@/components/common/stakeCard";
import { Label } from "@radix-ui/react-label";
import { TaskCard } from "@/components/common/taskCard";

const Tasks = [
  {
    title: "Task 1",
    description: "Description 1",
    dateCreated: "2023-01-01",
    expirationDate: "2023-01-02",
    stake: 100,
  },
  {
    title: "Task 2",
    description: "Description 2",
    dateCreated: "2023-01-01",
    expirationDate: "2023-01-02",
    stake: 100,
  },
];

interface WalletClient {
  requestAddresses(): Promise<string[]>;
}

export default function Home() {
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const client = createWalletClient({
      chain: anvil,
      transport: custom((window as any).ethereum!),
    });

    setWalletClient(client);
  }, []);

  const connectWallet = async () => {
    if (!(window as any).ethereum) return;

    const [address] = await walletClient.requestAddresses();

    setAddress(address);
  };

  const disconnectWallet = () => {
    setAddress(null);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto pt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Web3 Todo List</h1>
          <h2>Gerencie sua tarefas com web3</h2>
        </div>

        {!address ? (
          <Button onClick={connectWallet} className="cursor-pointer">
            <WalletIcon />
            <span>Connect Wallet</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <span>{address}</span>
            <Button onClick={disconnectWallet}>
              <XIcon />
              <span>Disconnect Wallet</span>
            </Button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <StatusCard title="Total tasks" value={10} />
        <StatusCard title="Total tasks completed" value={3} />
        <StatusCard title="Total tasks pending" value={7} />
        <StatusCard title="Total wei staked" value={232300000070000} />
      </div>
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
              <span>New Task</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Task</DialogTitle>
            </DialogHeader>
            <DialogDescription className="flex flex-col gap-4 max-w-2xl">
              <Label>Title</Label>
              <Input type="text" placeholder="Task title" />
              <Label>Description</Label>
              <Textarea placeholder="Task description" />
              <Label>Birthdate</Label>
              <Input type="datetime-local" placeholder="Birthdate" />
              <Label>Stake</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <StakeCard />
                <StakeCard />
                <StakeCard />
                <StakeCard />
              </div>
              <Button>
                <PlusIcon />
                <span>Create Task</span>
              </Button>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {Tasks.length === 0 ? (
          <div className="flex justify-center gap-2">
            <p className="text-center font-bold">No tasks found</p>
          </div>
        ) : (
          Tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              description={task.description}
              dateCreated={task.dateCreated}
              expirationDate={task.expirationDate}
              stake={task.stake}
            />
          ))
        )}
      </div>
    </div>
  );
}
