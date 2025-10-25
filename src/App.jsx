import Login from './components/Auth/Login/login'
import Register from './components/Auth/Register/register'
import Dashboard from './components/Dashboard/Dashboard'
import Accounts from './components/Accounts/Accounts'
import Loans from './components/Loans/Loans'
import Report from './components/Reports/Reports'
import Transactions from './components/Transactions/Transactions'
import RecoverPassword from './components/Auth/recover_password/recover_password'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/accounts" element={<Accounts/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/loans" element={<Loans/>}/>
          <Route path="/reports" element={<Report/>}/>
          <Route path="/forgot-password" element={<RecoverPassword/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App
