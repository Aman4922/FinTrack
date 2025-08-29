import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, DollarSign, Target, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  // Sample data
  const monthlyData = [
    { month: 'Jan', income: 4200, expenses: 3100 },
    { month: 'Feb', income: 4500, expenses: 3400 },
    { month: 'Mar', income: 4200, expenses: 2800 },
    { month: 'Apr', income: 4800, expenses: 3600 },
    { month: 'May', income: 4600, expenses: 3200 },
    { month: 'Jun', income: 5000, expenses: 3800 }
  ];

  const expenseCategories = [
    { name: 'Food & Dining', value: 890, color: '#EF4444' },
    { name: 'Transportation', value: 320, color: '#F97316' },
    { name: 'Shopping', value: 450, color: '#EC4899' },
    { name: 'Bills & Utilities', value: 620, color: '#06B6D4' },
    { name: 'Entertainment', value: 230, color: '#8B5CF6' },
    { name: 'Healthcare', value: 180, color: '#10B981' }
  ];

  const cashFlowData = [
    { date: '2024-01', balance: 15000 },
    { date: '2024-02', balance: 16100 },
    { date: '2024-03', balance: 17400 },
    { date: '2024-04', balance: 18200 },
    { date: '2024-05', balance: 19600 },
    { date: '2024-06', balance: 21800 }
  ];

  const insights = [
    {
      title: 'Spending Trend',
      description: 'Your expenses have decreased by 12% this month',
      type: 'positive',
      icon: TrendingUp
    },
    {
      title: 'Budget Alert',
      description: 'Food & Dining category is 85% of budget',
      type: 'warning',
      icon: AlertTriangle
    },
    {
      title: 'Savings Goal',
      description: 'On track to reach emergency fund target',
      type: 'positive',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Deep insights into your financial patterns</p>
          </div>
          <Badge className="animate-pulse">
            <TrendingUp className="h-3 w-3 mr-1" />
            Real-time Analysis
          </Badge>
        </div>

        {/* Financial Health Score */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Financial Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-success">785</div>
                <div className="text-sm text-muted-foreground">Excellent • +23 from last month</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium">Score Range: 300-850</div>
                <div className="text-sm text-success">Above Average (720+)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {insights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  insight.type === 'positive' ? 'border-success/30 bg-success/10' : 'border-warning/30 bg-warning/10'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <insight.icon className={`h-4 w-4 ${
                      insight.type === 'positive' ? 'text-success' : 'text-warning'
                    }`} />
                    <h4 className="font-medium">{insight.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <Tabs defaultValue="income-expenses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="income-expenses">Income vs Expenses</TabsTrigger>
            <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
            <TabsTrigger value="expenses-breakdown">Expense Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="income-expenses">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Income vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="hsl(var(--success))" name="Income" />
                    <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cash-flow">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Cash Flow Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={cashFlowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Balance"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expenses-breakdown">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Expense Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {expenseCategories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: category.color }}
                          />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="font-medium">${category.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;