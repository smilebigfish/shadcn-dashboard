import PageTitle from "@/components/PageTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChartView } from "@/components/Overview";
import { RecentSales } from "@/components/RecentSales";
import { Activity, CreditCard, DollarSign, LucideIcon, Users } from "lucide-react";

export type CardProps = {
  label: string,
  amount: string,
  description: string,
  icon: LucideIcon
}

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />

      <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {d.label}
              </CardTitle>
              <d.icon />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{d.amount}</div>
              <p className="text-xs text-muted-foreground">
                {d.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid w-full gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-7">
        <Card className="sm:col-span-2 xl:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <BarChartView />
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
