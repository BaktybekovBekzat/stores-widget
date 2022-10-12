import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { EffectCards } from "swiper";
import CardItem from "./CardItem";

const Modal = ({ isVisible, setIsVisible }) => {
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://docs.stores.kg/api/main/page", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "api-token": "f1cdecbeba8f4a1547d3dc0db9376fec",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const blocks = res["hydra:member"][0].blocks;
                const block = blocks.filter(
                    (block) => block.design === "custom" && block.type === "product",
                );

                if (block) {
                    setTitle(block[0].name);
                    setProducts(block[0].list);
                }
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
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="close"
                onClick={() => setIsVisible(false)}>
                <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="#242328"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
};

export default Modal;
