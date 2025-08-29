import React from "react";

export class ShopItemClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        const formatPrice = `${item.currency}${item.price.toFixed(2)}`;

        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
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
    }
}
