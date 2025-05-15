import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import TransactionsPage from './pages/TransactionsPage';
import AccountOverview from './pages/AccountOverview';
import PayoutPage from './pages/Payout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/account" element={<Navigate to="/account" />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsPage />} />
           <Route path="/accounts/account-overview" element={<AccountOverview />} />
           <Route path="/payout" element={<PayoutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
