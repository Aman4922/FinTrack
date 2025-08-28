import { ArrowDownIcon, ArrowUpIcon, CreditCard, DollarSign, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ElementType;
  trend?: "up" | "down";
}

const MetricCard = ({ title, value, change, changeType, icon: Icon, trend }: MetricCardProps) => {
  const isPositive = changeType === "increase";
  
  return (
    <Card className="glass-card group hover:shadow-glow transition-all duration-300 animate-float">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary group-hover:text-primary-glow transition-colors" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center text-xs mt-1">
          {isPositive ? (
            <ArrowUpIcon className="h-3 w-3 text-success mr-1" />
          ) : (
            <ArrowDownIcon className="h-3 w-3 text-destructive mr-1" />
          )}
          <span className={isPositive ? "text-success" : "text-destructive"}>
            {change}
          </span>
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Balance",
      value: "$45,231.89",
      change: "+12.5%",
      changeType: "increase" as const,
      icon: DollarSign,
    },
    {
      title: "Monthly Income",
      value: "$8,450.00",
      change: "+8.2%",
      changeType: "increase" as const,
      icon: TrendingUp,
    },
    {
      title: "Monthly Expenses", 
      value: "$3,180.50",
      change: "-4.3%",
      changeType: "decrease" as const,
      icon: CreditCard,
    },
    {
      title: "Savings Goal",
      value: "78% Complete",
      change: "+15.1%",
      changeType: "increase" as const,
      icon: Target,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {metrics.map((metric, index) => (
        <div key={metric.title} style={{ animationDelay: `${index * 100}ms` }}>
          <MetricCard {...metric} />
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;