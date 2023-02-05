import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Navbar } from "./components/NavBar/Navbar";
import { Generator } from "./pages/Generator/Generator";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/generator/:type" element={<Generator />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
