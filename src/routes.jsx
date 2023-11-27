import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/index';
import Sobre from './pages/Sobre/index';
import Projetos from './pages/Projetos/index';
import Contato from './pages/Contato/index';
import PageNotFound from "./pages/PageNotFound";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() { 

    return(
        <BrowserRouter>
           
           <Routes>
            <Route path="/" element={<PaginaBase />}>
                <Route index element= {<Home /> } ></Route>
                <Route path="/sobre" element={<Sobre /> } ></Route>
                <Route path="/projetos" element={<Projetos /> } ></Route>
                <Route path="/contatos" element={<Contato />}></Route>
                <Route path="*" element={<PageNotFound /> } ></Route>
            </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;