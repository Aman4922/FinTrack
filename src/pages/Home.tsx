import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  PieChart, 
  Settings, 
  Target, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Shield,
  Smartphone
} from 'lucide-react';

const navigationCards = [
  {
    title: 'Dashboard',
    description: 'Overview of your financial health',
    icon: BarChart3,
    href: '/dashboard',
    color: 'bg-gradient-primary',
    features: ['Real-time balance', 'AI insights', 'Quick metrics']
  },
  {
    title: 'Transactions',
    description: 'Manage and track all your transactions',
    icon: CreditCard,
    href: '/transactions',
    color: 'bg-gradient-success',
    features: ['Add transactions', 'Search & filter', 'Categories']
  },
  {
    title: 'Budgets',
    description: 'Set and monitor monthly spending limits',
    icon: PieChart,
    href: '/budgets',
    color: 'bg-accent',
    features: ['Monthly budgets', 'Progress tracking', 'Alerts']
  },
  {
    title: 'Goals',
    description: 'Track your savings and financial goals',
    icon: Target,
    href: '/goals',
    color: 'bg-warning',
    features: ['Savings goals', 'Progress visualization', 'Achievement tracking']
  },
  {
    title: 'Analytics',
    description: 'Deep insights into your spending patterns',
    icon: TrendingUp,
    href: '/analytics',
    color: 'bg-destructive',
    features: ['Income vs expenses', 'Trends analysis', 'Predictions']
  },
  {
    title: 'Settings',
    description: 'Customize your experience',
    icon: Settings,
    href: '/settings',
    color: 'bg-secondary',
    features: ['Profile management', 'Themes', 'Notifications']
  }
];

const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your financial data is protected with enterprise-grade encryption'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations and spending analysis'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Access your finances anywhere with our responsive design'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-card m-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-primary shadow-glow">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FinTech Dashboard</h1>
              <p className="text-sm text-muted-foreground">Personal Finance Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="animate-pulse">
              <Sparkles className="h-3 w-3 mr-1" />
              New Features
            </Badge>
            <Button asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <Badge className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Advanced Analytics
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold">
              Take Control of Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Financial Future
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive personal finance management with AI-powered insights, 
              multi-account support, and beautiful glassmorphism design.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link to="/auth" className="group">
                Start Managing Finances
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View Demo Dashboard</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">Why Choose Our Platform?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies and designed for the next generation of financial management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors" />
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">Explore Our Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through our comprehensive suite of financial tools designed to help you achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationCards.map((card, index) => (
              <Card key={index} className="glass-card group hover:shadow-glow transition-all duration-300 animate-float" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${card.color} shadow-lg`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10" asChild>
                    <Link to={card.href}>
                      Explore {card.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12">
          <div className="glass-card p-12 space-y-6">
            <h3 className="text-3xl font-bold">Ready to Transform Your Finances?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who have already taken control of their financial future with our advanced platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/auth">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/dashboard">Try Live Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;