const ShopCard = ({ item }) => {
  const titleButton = "Add to cart";
  return (
    <div className="card-container">
      <header className="card-container-header">
        <h3 className="card-title">{item.name}</h3>
        <span className="product-color">{item.color}</span>
      </header>
      <main className="card-content">
        <div className="card-img__wrap">
          <img className="card-image" src={item.img} alt={item.name} />
        </div>
      </main>
      <footer className="card-footer">
        <span className="card-price">{"$"+ item.price}</span>
        <button className="add-to-cart__btn">{titleButton}</button>
      </footer>
    </div>
  );
}
export default  ShopCard;