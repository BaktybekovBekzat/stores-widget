import React from "react";
import NoImage from "../no-image-product.png";

const CardItem = ({ data }) => {
    return (
        <a href={`https://stores.kg/product/${data.slug}`} target="_blank">
            <div className="card-item" key={data.id}>
                <img src={data.imagePath ? data.imagePath : NoImage} alt={data.name} />
                <div className="card-item__info">
                    <p className="card-item__info-name">{data.name}</p>
                    {data?.dPrice ? (
                        <p className="card-item__info-discount-price">{data.price}с</p>
                    ) : null}
                    <p className="card-item__info-price">
                        {data.price - data.dPrice}
                        <span>с</span>
                    </p>
                    <button className="card-item__info-btn">В Корзину</button>
                </div>
            </div>
        </a>
    );
};

export default CardItem;
