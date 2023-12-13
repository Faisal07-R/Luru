import post from "../post.json";
import satai from "../assets/satai.jpg";

export default function Recomendation({ searchTerm }) {
  const filteredPosts = post.filter((rekomen) => rekomen.NameToko.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="recomendation-list">
        {filteredPosts.map((rekomen) => (
          <div key={rekomen.id}>
            <img src={satai} alt={rekomen.name} />
            <h4>{rekomen.NameToko}</h4>
            <p className="alamat-text">{rekomen.alamat}</p>
            <p className="description-text">{rekomen.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
