import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TabsContent
} from "@/components/ui/tabs";

export default function Tramsfer() {
  return (
    <TabsContent value="transfer">
      <Card>
        <CardHeader>
          <CardTitle>Save and spend</CardTitle>
          <CardDescription>
            This demo is to show you how save and spend works with Slast.
            When you transfer funds to a friend, a % will be held back by Slast and deposited into Aave to earn yields.
            If you send 100 USDC as an example, 1 USDC will supplied to Aave while 99 usdc will go to the recipient.
            This can be extended for a lot of usecases such as splitting funds after a successful trade that leaves you
            in profit amongst others.
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
            <Label htmlFor="recipient">Recipient</Label>
            <Input id="recipient" defaultValue="lanre.eth" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
