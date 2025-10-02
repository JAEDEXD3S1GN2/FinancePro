import React from "react";
import AcctPage from "./pages/AcctPage/AcctPage";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Finance from "./pages/Financial-goals/Finance-goals";
import Signin from "./pages/SIgnin/Signin";
import SwitchAcc from "./pages/switchAccount/SwitchAcc";
import TransactHistory from "./pages/Transactions/transactHistory";
import ForgotP from "./pages/ForgotPassW/ForgotP";
import Unavailable from "./pages/Error/Error";
import SignUp from "./pages/Signup/Signup";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Airtime from "./pages/Airtime/Airtime";
import CustomerCare from "./pages/CustomerCare/CustomerCare";
import Data from "./pages/Data/Data";
import ElectricityB from "./pages/ElectricityBill/ElectricityB";
import Fianace from "./pages/Finance/Fianace";
import FinancialG from "./pages/Financial-goals/Finance-goals";
import IandS from "./pages/InvestmentandShares/I&S";
import More from "./pages/More/More";
import Notification from "./pages/Notification/Notification";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Safe from "./pages/Safepage/Safe";
import Security from "./pages/Security/Security";
import SettingsPage from "./pages/Settings/Settings";
import FinanceWallet from "./pages/TransferPage/FinanceWallet/FinanceWallet";
import Others from "./pages/TransferPage/Other/Others";
import Amount from "./pages/TransferPage/Other/Amount/Amount";
import ConfirmP from "./pages/TransferPage/Other/ConfirmP/ConfirmP";
import TVSub from "./pages/Tv-Subsription/TV-Sub";
import VirtualC from "./pages/VirtualCard/VirtualC";
import Withdraw from "./pages/Withdraw/Withdraw";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AcctBreakdown from "./pages/AccountBreakdown/AcctBreakdown";
import UserProfile from "./pages/UserProfile/UserProfile";
import Insights from "./pages/Insights/Insights";
import Transfer from "./pages/TransferPage/Transfer/Transfer";
import TopUp from "./pages/Top-up/TopUp";
import Insurance from "./pages/Insurance/Insurance";
import Bills from "./pages/Bills/Bills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />
      <Routes>
        <Route path="/UserAcc" element={<AcctPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/FinancialGoals" element={<Finance />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Error" element={<Unavailable />} />
        <Route path="/SwitchAccount" element={<SwitchAcc />} />
        <Route path="/TransactionHistory" element={<TransactHistory />} />
        <Route path="/ForgotPassword" element={<ForgotP />} />
        <Route path="/Airtime" element={<Airtime />} />
        <Route path="/CustomerCare" element={<CustomerCare />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Electricity" element={<ElectricityB />} />
        <Route path="/Finance" element={<Fianace />} />
        <Route path="/FinancialGoals" element={<FinancialG />} />
        <Route path="/InvestandShares" element={<IandS />} />
        <Route path="/More" element={<More />} />
        <Route path="/Bills" element={<Bills />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/SafeBox" element={<Safe />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/FinanceWallet" element={<FinanceWallet />} />
        <Route path="/OtherBanks" element={<Others />} />
        <Route path="/GiveAmount" element={<Amount />} />
        <Route path="/AcctBreakdown" element={<AcctBreakdown />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Confirmpayment" element={<ConfirmP />} />
        <Route path="TVSubsription" element={<TVSub />} />
        <Route path="/VirtualCard" element={<VirtualC />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/TopUp" element={<TopUp />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
