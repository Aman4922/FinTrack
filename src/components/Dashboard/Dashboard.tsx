import DashboardHeader from "./DashboardHeader";
import MetricsCards from "./MetricsCards";
import RecentTransactions from "./RecentTransactions";
import FinancialChart from "./FinancialChart";
import AIInsights from "./AIInsights";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <DashboardHeader />
      
      <div className="space-y-8">
        {/* Metrics Overview */}
        <MetricsCards />
        
        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <FinancialChart />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <RecentTransactions />
            <AIInsights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;