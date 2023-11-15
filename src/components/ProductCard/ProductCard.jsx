import React from "react";
import { FiShoppingBag } from "react-icons/fi";

function ProductCard(){
    return(
        <section className="product_card">
            <img src="" alt="" className="card_img"/>
            <div className="card_info">
                <h2 className="card_price"></h2>
                <p className="card_title"></p>
            </div>
            <button className="btn"> Comprar
                <FiShoppingBag />
            </button>
        </section>
    )
}

export default ProductCard;