import Discount from "../components/CardDiscont";
import Recomendation from "../components/CardRecomendasi";
import post from "../post.json";
import satai from "../assets/satai.jpg";

export default function MerchantDetail() {
  return (
    <>
      <section className="merchant">
        <div className="merchant-image">
          <img src={satai} alt="Jumbtron" />
        </div>
        <div className="merchant-text">
          <h1>{post.NameToko}</h1>
          <p>{post.alamat}</p>
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
          <Recomendation />
        </div>
      </section>
    </>
  );
}
