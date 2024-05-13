import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Transfer from "./tabs/transfer"
import Deposit from "./tabs/deposit"
import Withdraw from "./tabs/withdraw"

export function Slast() {
  return (
    <Tabs defaultValue="transfer" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="transfer">Transfer</TabsTrigger>
        <TabsTrigger value="deposit">Deposit</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>
      <Transfer />
      <Deposit />
      <Withdraw />
    </Tabs>
  )
}
