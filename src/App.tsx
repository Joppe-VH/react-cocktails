import Home from "./pages/Home";
import Cocktails from "./pages/Cocktails";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import CocktailDetail from "./pages/CocktailDetail";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktails/:id/:slug" element={<CocktailDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
