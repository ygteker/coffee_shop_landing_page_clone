import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ContentPanel from './components/panels/ContentPanel';
import TopBar from './components/TopBar';
import Content from './components/Content';
import Footer from './components/Footer';
import strings from './strings.yaml';
import { StringContextProvider } from './StringsContext';

function App() {
  return (
    <StringContextProvider data={strings}>
      <div className="App">
        <TopBar />
        <Header />
        <Content />
        <Footer />
      </div>
    </StringContextProvider>
  );
}

export default App;
