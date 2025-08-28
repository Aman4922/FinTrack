import { Brain, TrendingUp, AlertTriangle, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface InsightProps {
  type: "recommendation" | "warning" | "achievement" | "prediction";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  confidence: number;
  icon: React.ElementType;
}

const InsightCard = ({ type, title, description, impact, confidence, icon: Icon }: InsightProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "recommendation": return "border-primary bg-primary/5";
      case "warning": return "border-warning bg-warning/5";
      case "achievement": return "border-success bg-success/5";
      case "prediction": return "border-accent bg-accent/5";
    }
  };

  const getImpactColor = () => {
    switch (impact) {
      case "high": return "bg-destructive/20 text-destructive";
      case "medium": return "bg-warning/20 text-warning";
      case "low": return "bg-success/20 text-success";
    }
  };

  return (
    <div className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${getTypeColor()}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <h4 className="font-medium text-sm">{title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className={getImpactColor()}>
            {impact} impact
          </Badge>
          <Badge variant="outline" className="text-xs">
            {confidence}% confidence
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <Button variant="ghost" size="sm" className="text-xs">
        Learn More
      </Button>
    </div>
  );
};

const AIInsights = () => {
  const insights: InsightProps[] = [
    {
      type: "recommendation",
      title: "Optimize Food Spending",
      description: "You're spending 35% more on dining out compared to similar users. Consider meal planning to save ~$200/month.",
      impact: "medium",
      confidence: 87,
      icon: Lightbulb,
    },
    {
      type: "warning",
      title: "Unusual Transaction Detected",
      description: "A $450 transaction at 'TechStore Pro' was flagged as potentially unusual based on your spending patterns.",
      impact: "high",
      confidence: 92,
      icon: AlertTriangle,
    },
    {
      type: "achievement",
      title: "Savings Goal on Track",
      description: "Congratulations! You're ahead of schedule on your laptop savings goal. You'll reach your target 2 months early.",
      impact: "high",
      confidence: 95,
      icon: Target,
    },
    {
      type: "prediction",
      title: "Budget Projection",
      description: "Based on current trends, you'll likely exceed your monthly entertainment budget by $85. Consider adjusting spending.",
      impact: "medium",
      confidence: 78,
      icon: TrendingUp,
    },
  ];

  return (
    <Card className="glass-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            <CardTitle className="text-xl font-semibold">AI Financial Insights</CardTitle>
          </div>
          <Badge variant="outline" className="bg-primary/20 text-primary">
            Real-time Analysis
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Personalized recommendations powered by machine learning
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
        
        <div className="mt-6 p-4 rounded-lg bg-gradient-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-4 w-4 text-primary" />
            <h4 className="font-medium text-sm">Financial Health Score</h4>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary">847</div>
              <p className="text-xs text-muted-foreground">Excellent (800-1000)</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-success">+23 points</div>
              <p className="text-xs text-muted-foreground">vs last month</p>
            </div>
          </div>
          <div className="mt-3 w-full bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "84.7%" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;