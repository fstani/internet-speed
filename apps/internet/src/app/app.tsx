import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Settings from './pages/settings/settings';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
