import { useState } from "react";
import Discount from "../components/CardDiscont";
import Recomendation from "../components/CardRecomendasi";
import SearchBar from "../components/SearchBar";
import "./home.css";
import Hero from "../assets/hero.jpg";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <img src={Hero} alt="Jumbotron" />
        </div>
        <div className="hero-text">
          <h1>Luru.</h1>
          <p>Yang kamu mau ada di sekitarmu!!!</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>
      <section>
        <h2 className="discount-title">Spesial Offer</h2>
        <div className="discount">
          <Discount />
        </div>
      </section>
      <section>
        <div className="card-item">
          <h2 className="recomendation-title">Rekomendasi</h2>
          <Recomendation searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
}
