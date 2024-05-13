import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TabsContent
} from "@/components/ui/tabs";

export default function Withdraw() {
  return (
    <TabsContent value="withdraw">
      <Card>
        <CardHeader>
          <CardTitle>Withdraw funds</CardTitle>
          <CardDescription>
            Withdraw funds from Slast protocol. This would send the funds from Aave
            directly to your wallet.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="asset">Token</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the asset to send" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" defaultValue="" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
