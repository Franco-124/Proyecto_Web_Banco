import Login from './components/Auth/login'
import Register from './components/Auth/register'
import Dashboard from './components/Dashboard/Dashboard'
import Accounts from './components/Accounts/Accounts'
import Loans from './components/Loans/Loans'
import Reports from './components/Reports/Reports'
import Transactions from './components/Transactions/Transactions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Dashboard />
    </>
    )
}

export default App
