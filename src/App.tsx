import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeView from "./views/Home";
import Footer from "./components/Footer";
import ArticleView from "./views/Article";

function App() {
   return (
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
         <Router>
            <Navbar />
            <Routes>
               <Route path='/' element={<HomeView />} />
               <Route path='/articulo/:id' element={<ArticleView />} />
            </Routes>
            <Footer />
         </Router>
      </ThemeProvider>
   );
}

export default App;
