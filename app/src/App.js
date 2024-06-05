import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import  {Sidebar} from './components/Sidebar'; 
//paginas
import Dash from './pages/Dash';
import Projeto from './pages/Projeto';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'
import Risco from './pages/Risco';

//contextos
import { AuthContextProvider } from './contexts/AuthContext';
import { SidebarStateContextProvider } from './contexts/SidebarStateContext';
import Format from './pages/Format';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <AuthContextProvider>
            <SidebarStateContextProvider>
            <Sidebar />
              <Routes>
                <Route exact path="/login" element={<Login/>} /> 
                <Route path="/" element={<Dash />}/> 
                <Route path="/dash" element={<Dash />}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/projeto" element={<Projeto/>}/>              
                <Route path="/risco" element={<Risco/>}/>
                <Route path="/format" element={<Format/>}/>
              </Routes>
            </SidebarStateContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

