import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";
import SearchCard from "./components/Layout/Header/SearchCard";

// import Posts from "./components/Posts/Posts";
// import Post from "./components/Post/Post";
import Notfound from "./components/Notfound/Notfound";
import CardPerson from "./components/CardPerson/CardPerson";
import RegistrationValide from "./components/RegistrationValide/RegistrationValide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:tupe/:id" element={<Home />} />
        <Route path="/post/:tupe/:id" element={<Card />} />
        <Route path="/registration" element={<RegistrationValide />} />
        <Route path="/post/person/:id" element={<CardPerson />} />
        <Route path="/search/:tupe" element={<SearchCard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
