import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';

//components
import  {Sidebar} from './components/Sidebar'; 
//paginas
import Dash from './pages/Dash';
import Projeto from './pages/Projeto';
import Cliente from './pages/Cliente';
import Login from './pages/Login'
import Tabelas from './pages/Tabelas';

//contextos
import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <AuthContextProvider>
            <Sidebar />
              <Routes>
                <Route exact path="/login" element={<Login/>} /> 
                <Route path="/" element={<Dash />}/> 
                <Route path="/projeto" element={<Projeto/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/dash" element={<Dash/>}/>
                <Route path="/tabelas" element={<Tabelas/>}/>
              </Routes>
          </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

