import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

// Pages
import MainContent from './components/Pages/MainContent';
import FollowUpPage from './components/Pages/FollowUpPage';
import AnalyticsPage from './components/Pages/AnalyticsPage';
import Orders from './components/Pages/OrdersPage';
import PurchaseOrders from './components/Pages/PurchaseOrders';
import SuppliersPage from './components/Pages/SuppliersTable';
import InventoryTrackingPage from './components/Pages/InventoryTrackingPage';
<<<<<<< HEAD
import StockManagementPage from "./components/Pages/Stocks";
=======
import PromotionsPage from './components/Pages/PromotionsPage';

>>>>>>> 9420788a839af4ebfdf875a6df4605cbbbe709b5
// Components
import AddClient from './components/AddClient';
import ClientTable from './components/ClientTable';
import AddPromotion from './components/AddPromotions';
import AddSupplier from './components/AddSuppliers';
import AddOrder from './components/AddOrder';

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/followups" element={<FollowUpPage />} />
          <Route path="/products" element={<ClientTable />} />
          <Route path="/add-product" element={<AddClient />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/add-orders" element={<AddOrder />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/add-suppliers" element={<AddSupplier />} />
          <Route path="/inventory-tracking" element={<InventoryTrackingPage />} />
<<<<<<< HEAD
          <Route path="/stocks" element={<StockManagementPage />} />


=======
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/add-promotions" element={<AddPromotion />} />
>>>>>>> 9420788a839af4ebfdf875a6df4605cbbbe709b5
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
