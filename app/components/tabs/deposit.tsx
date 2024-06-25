import { Button } from "@/components/ui/button";
import { z } from "zod"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  TabsContent
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import Link from "next/link";
import { knownContracts } from "@/app/lib/address";

const formSchema = z.object({
  token: z.string().min(2, {
    message: "Please provide a valid address",
  }),
  amount: z.string().min(2, {
    message: "please provide valid amount",
  }),
})

export default function Deposit() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <TabsContent value="deposit">
      <Card>
        <CardHeader>
          <CardTitle>Deposit funds</CardTitle>
          <CardDescription>
            Deposit funds into Slast protocol to earn yield on your assets. This would go
            directly to Aave and whenever you withdraw the funds go to you directly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select token to deposit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {knownContracts.map((contract, idx) => {
                            return (
                              <SelectItem value={contract.address} key={idx}>{contract.fullName}</SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Please select the token to deposit into Slast
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount to deposit</FormLabel>
                      <FormControl>
                        <Input placeholder="1" {...field} />
                      </FormControl>
                      <FormDescription>
                        The amount you want to supply into the protocol
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Deposit</Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}
