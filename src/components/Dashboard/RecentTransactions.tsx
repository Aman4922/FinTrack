import { MoreHorizontal, ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  account: string;
}

const RecentTransactions = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Salary Deposit",
      amount: 5000.00,
      type: "income",
      category: "Salary",
      date: "2024-01-15",
      account: "Main Account",
    },
    {
      id: "2", 
      description: "Grocery Shopping",
      amount: -156.80,
      type: "expense",
      category: "Food & Dining",
      date: "2024-01-14",
      account: "Credit Card",
    },
    {
      id: "3",
      description: "Netflix Subscription",
      amount: -15.99,
      type: "expense", 
      category: "Entertainment",
      date: "2024-01-14",
      account: "Main Account",
    },
    {
      id: "4",
      description: "Freelance Project",
      amount: 800.00,
      type: "income",
      category: "Freelance",
      date: "2024-01-13",
      account: "Business Account",
    },
    {
      id: "5",
      description: "Electric Bill",
      amount: -89.50,
      type: "expense",
      category: "Utilities",
      date: "2024-01-12",
      account: "Main Account",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Salary": "bg-success/20 text-success",
      "Freelance": "bg-primary/20 text-primary",
      "Food & Dining": "bg-orange-500/20 text-orange-500",
      "Entertainment": "bg-purple-500/20 text-purple-500",
      "Utilities": "bg-blue-500/20 text-blue-500",
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const getCategoryInitial = (category: string) => {
    return category.charAt(0).toUpperCase();
  };

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-card-hover transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className={getCategoryColor(transaction.category)}>
                  {getCategoryInitial(transaction.category)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="font-medium text-sm">{transaction.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {transaction.account}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="flex items-center gap-1">
                  {transaction.type === "income" ? (
                    <ArrowUpIcon className="h-3 w-3 text-success" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 text-destructive" />
                  )}
                  <span
                    className={`font-semibold ${
                      transaction.type === "income" ? "text-success" : "text-destructive"
                    }`}
                  >
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;