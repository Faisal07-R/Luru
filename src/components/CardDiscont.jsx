import post from "../post.json";
import DiscountJpg from "../assets/discount.jpg";
export default function Discount() {
  return (
    <>
      <div className="discount-list">
        {post.map((discount) => (
          <div key={discount.id} className="discount-item">
            <img src={DiscountJpg} alt={discount.name} />
          </div>
        ))}
      </div>
    </>
  );
}
