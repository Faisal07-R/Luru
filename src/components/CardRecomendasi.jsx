import post from "../post.json";
import "./cardrecomendation.css";
import { Link } from "react-router-dom";

export default function Recomendation({ searchTerm }) {
  const filteredPosts = post.filter((rekomen) => rekomen.NameToko.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="recomendation-list">
        {filteredPosts.map((rekomen, index) => (
          <div key={index}>
            <img src={rekomen.pictureId} alt={rekomen.name} />
            <Link to={`/merchantdetail/${rekomen.id}`}>
              <h4 className="Link">{rekomen.NameToko}</h4>
            </Link>

            <p className="alamat-text">{rekomen.alamat}</p>
            <p className="description-text">{rekomen.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
