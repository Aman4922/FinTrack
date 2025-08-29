import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plus, Target, Calendar, TrendingUp } from 'lucide-react';

const Goals = () => {
  const goals = [
    {
      id: 1,
      name: 'Emergency Fund',
      description: '6 months of expenses',
      targetAmount: 18000,
      currentAmount: 12400,
      targetDate: '2024-12-31',
      priority: 'high',
      color: 'bg-destructive'
    },
    {
      id: 2,
      name: 'Vacation Fund',
      description: 'Europe trip next summer',
      targetAmount: 5000,
      currentAmount: 2100,
      targetDate: '2024-06-15',
      priority: 'medium',
      color: 'bg-primary'
    },
    {
      id: 3,
      name: 'New Car',
      description: 'Down payment for new vehicle',
      targetAmount: 10000,
      currentAmount: 3500,
      targetDate: '2025-03-01',
      priority: 'low',
      color: 'bg-success'
    }
  ];

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Savings Goals</h1>
            <p className="text-muted-foreground">Track your progress towards financial objectives</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Goal
          </Button>
        </div>

        {/* Goals Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center text-xs text-success mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                2 on track
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Target</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$33,000</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                Across all goals
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">$18,000</div>
              <div className="flex items-center text-xs text-success mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                55% completed
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals List */}
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            const remaining = goal.targetAmount - goal.currentAmount;
            
            return (
              <Card key={goal.id} className="glass-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${goal.color}`} />
                        <CardTitle className="text-lg">{goal.name}</CardTitle>
                        <Badge variant={getPriorityVariant(goal.priority)}>
                          {goal.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(goal.targetDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-3" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Target className="h-4 w-4 mr-1" />
                        ${remaining.toLocaleString()} remaining
                      </div>
                      <Button variant="outline" size="sm">
                        Add Funds
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Goals;