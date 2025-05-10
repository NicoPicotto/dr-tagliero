import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeView from "./views/Home";

function App() {
   return (
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
         <Router>
            <Navbar />
            <Routes>
               <Route path='/' element={<HomeView />} />
            </Routes>
         </Router>
      </ThemeProvider>
   );
}

export default App;
