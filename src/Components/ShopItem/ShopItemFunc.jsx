export const ShopItemFunc = (props) => {
  const {brand, currency, description, descriptionFull, price, title} = props;
  const formatPrice = `${currency}${price.toFixed(2)}`;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
        <div className="description">{descriptionFull}</div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
            <div className="purchase-info">
              <div className="price">{formatPrice}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
};