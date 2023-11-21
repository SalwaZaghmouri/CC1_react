import { Route, Routes } from "react-router-dom";
import Nav from "./nav";
import { Accueil } from "./Accueil";
import Container1 from "./calcul/Container1";
import Slider from "./slider/Slider";
import TodoList from "./todolist/TodoList";
import Pagination from "./pagination/Pagination";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContexte";
import NotFound from './NotFound';
function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/NotFound" element={<NotFound/>}/>
        <Route path="/Calculatrice" element={<Container1/>}/>
        <Route path="/Slider" element={<Slider/>}/>
        <Route path="/To-Do-List" element={<TodoList/>}/>
        <Route path="/Pagination" element={<Pagination/>}/>
      </Routes>
    </div>
    </ThemeProvider>
    </LanguageProvider>
    
    
  );
}

export default App;
