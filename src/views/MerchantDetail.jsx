import React from "react";
import Discount from "../components/CardDiscont";
import RecomendationMenu from "../components/Cardmenu";
import post from "../post.json";

import { useParams } from "react-router-dom";

export default function MerchantDetail() {
  const { id } = useParams();
  const parsedId = parseInt(id); //
  const selectedPost = post.find((item) => item.id === parsedId);

  if (!selectedPost) {
    return <div>Tidak ada data toko</div>;
  }
  const menuItems = selectedPost.Menu;
  return (
    <>
      <section className="merchant">
        <div className="merchant-image">
          <img src={selectedPost.pictureId} alt="Jumbotron" />
        </div>
        <div className="merchant-text">
          <h1>{selectedPost.NameToko}</h1>
          <p>{selectedPost.alamat}</p>
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
          <h2 className="recommendation-title">Rekomendasi</h2>
          <RecomendationMenu menuItems={menuItems} />
        </div>
      </section>
    </>
  );
}
