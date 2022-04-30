import React from 'react';
import Router from './routes';  // routes
import ThemeProvider from './theme';  // theme
import ScrollToTop from './components/ScrollToTop'; // components
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';


export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
