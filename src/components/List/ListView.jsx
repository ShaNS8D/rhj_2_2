import ShopListItem from "./ShopListItem";

const ListView = ({ products }) => {
  const date = new Date();
  const nowDate = date.getTime();
 
  return (
    <ul className="products-list">
      {products.map((product, index) => {
        return (
          <li 
          key={`${nowDate}-${index}`}
          className="products-list-item">
            <ShopListItem item={product} />
          </li>
        );
      })}
    </ul>
  );
}
export default  ListView;

