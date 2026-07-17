import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Plus,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

const recentExpenses = [
  { id: 1, description: "Grocery Store", category: "Food", amount: -84.32, date: "Today" },
  { id: 2, description: "Netflix", category: "Subscriptions", amount: -15.99, date: "Yesterday" },
  { id: 3, description: "Freelance payment", category: "Income", amount: 1200.0, date: "Jul 14" },
  { id: 4, description: "Electric bill", category: "Utilities", amount: -112.5, date: "Jul 13" },
  { id: 5, description: "Coffee shop", category: "Food", amount: -6.8, date: "Jul 12" },
];

const categoryColors: Record<string, string> = {
  Food: "bg-orange-500/10 text-orange-500",
  Subscriptions: "bg-purple-500/10 text-purple-500",
  Income: "bg-emerald-500/10 text-emerald-500",
  Utilities: "bg-blue-500/10 text-blue-500",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold tracking-tight">Expenses</span>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm">
              <Plus className="mr-1.5 h-4 w-4" />
              Add expense
            </Button>
            <UserButton />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$4,218.40</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-emerald-500">
                <TrendingUp className="h-3.5 w-3.5" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Spent this month</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$1,340.61</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                <TrendingDown className="h-3.5 w-3.5" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Income this month</CardTitle>
              <ArrowDownLeft className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$3,200.00</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-emerald-500">
                <TrendingUp className="h-3.5 w-3.5" />
                Same as last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">Recent transactions</CardTitle>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              View all
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="divide-y">
              {recentExpenses.map((expense) => (
                <li key={expense.id} className="flex items-center justify-between px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{expense.description}</p>
                      <p className="text-xs text-muted-foreground">{expense.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className={categoryColors[expense.category]}>
                      {expense.category}
                    </Badge>
                    <span className={`text-sm font-semibold tabular-nums ${expense.amount > 0 ? "text-emerald-500" : ""}`}>
                      {expense.amount > 0 ? "+" : ""}
                      {expense.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
