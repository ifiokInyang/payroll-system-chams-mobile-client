import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { Toaster } from "react-hot-toast";




function App() {
  return (
    <div>
      <Toaster />
      <Dashboard />
    </div>
  );
}

export default App;
