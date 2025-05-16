import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import TransactionsPage from './pages/TransactionsPage';
import AccountOverview from './pages/AccountOverview';
import PayoutPage from './pages/Payout';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Navigate to="/account" />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Layout>
                <TransactionsPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/accounts/account-overview"
          element={
            <PrivateRoute>
              <Layout>
                <AccountOverview />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/payout"
          element={
            <PrivateRoute>
              <Layout>
                <PayoutPage />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
