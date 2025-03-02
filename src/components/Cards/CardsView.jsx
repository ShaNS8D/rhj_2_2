import ShopCard from "./ShopCard";

const CardsView = ({products}) => {
  const date = new Date();
  const nowDate = date.getTime();
 
  return (
    <ul className="products-module">
      {products.map((product, index) => {
        return (
          <li 
          key={`${nowDate}-${index}`}
          className="products-list-item"
          >
            <ShopCard item={product} />
          </li>
        );
      })}
    </ul>
  );
}
export default  CardsView;