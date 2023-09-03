import './App.css';
import Layout from './components/Layout';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import TestComp from './components/TestComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </div>
  );
}
export default App;
