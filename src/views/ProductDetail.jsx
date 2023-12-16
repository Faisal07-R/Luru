import React from "react";
import { useParams } from "react-router-dom";
import post from "../post.json";

export default function ProductDetail() {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const selectedPost = post.find((item) => item.id === parsedId);

  if (!selectedPost) {
    return <div>Tidak ada data toko</div>;
  }

  return (
    <>
      <section>
        <div className="recomendation-list">
          {selectedPost.Menu.map((menu) => (
            <div key={menu.id} className="menu-item">
              <img src={menu.pictureMenu} alt={menu.Title} />
              <h4>{menu.Title}</h4>
              <p className="description-text">{menu.Description}</p>
              <a href={`/productdetail/${menu.id}`}>Lihat Detail</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
