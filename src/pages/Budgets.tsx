import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, AlertTriangle, TrendingUp } from 'lucide-react';

const Budgets = () => {
  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Budgets</h1>
            <p className="text-muted-foreground">Set and monitor your monthly spending limits</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Budget
          </Button>
        </div>

        {/* Budget Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,500</div>
              <div className="flex items-center text-xs text-success mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Spent This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,180</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                62% of total budget
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">$1,320</div>
              <div className="flex items-center text-xs text-success mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                On track
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Categories */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Sample Budget Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Food & Dining</span>
                  <span className="text-sm text-muted-foreground">$420 / $500</span>
                </div>
                <Progress value={84} className="h-2" />
                <div className="flex items-center text-xs text-warning">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  84% used - approaching limit
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Transportation</span>
                  <span className="text-sm text-muted-foreground">$180 / $300</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-success">60% used - on track</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Entertainment</span>
                  <span className="text-sm text-muted-foreground">$95 / $200</span>
                </div>
                <Progress value={47.5} className="h-2" />
                <div className="text-xs text-success">47% used - doing well</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Category Budget
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Budgets;