import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCards } from "swiper";
import CardItem from "./CardItem";

const Modal = ({ isVisible }) => {
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://test-docs.stores.kg/api/main/page", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "api-token": "f1cdecbeba8f4a1547d3dc0db9376fec",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const block = res["hydra:member"][0].blocks[6];
                setTitle(block.name);
                setProducts(block.list);
            });
    }, []);

    return (
        <div className={`stores-modal ${!isVisible ? "hide" : ""}`}>
            <h3 className="stores-modal__title">{title}</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={1.1}
                modules={[EffectCards]}
                effect="cards"
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper">
                <div className="stores-modal__list">
                    {products.map((product) => {
                        return (
                            <SwiperSlide className="swiper__custom" key={product.id}>
                                <CardItem data={product} />
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </div>
    );
};

export default Modal;
