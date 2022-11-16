import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Registration from './FrontEnd/Registration';
import Dashboard from './FrontEnd/Dashboard';
import CheckBalance from './FrontEnd/CheckBalance';
import DepositMoney from './FrontEnd/DepositMoney';
import WithDrawMoney from './FrontEnd/WithDrawMoney';
import Transaction from './FrontEnd/Transaction';
import Employee from './FrontEnd/Employee';
import CustomerList from './FrontEnd/CustomerList';
import CustomerInfo from './FrontEnd/CustomerInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/registration' element={<Registration/>}></Route>
          <Route exact path='/dashboard/:id' element={<Dashboard/>}></Route>
          <Route exact path='/customer/balance/:id' element={<CheckBalance/>}></Route>
          <Route exact path='/customer/deposit/:id' element={<DepositMoney/>}></Route>
          <Route exact path='/customer/withdraw/:id' element={<WithDrawMoney/>}></Route>
          <Route exact path='/customer/receipt/:id' element={<Transaction/>}></Route>
          <Route exact path='/employee' element={<Employee/>}></Route>
          <Route exact path='/customer/list' element={<CustomerList/>}></Route>
          <Route exact path='/customer/info/:id' element={<CustomerInfo/>}></Route>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
