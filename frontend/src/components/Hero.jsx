import { Link, Navigate } from "react-router-dom";

export default function Hero() {

    return (

        <div id="home" className="container">
            <div className="banner">
                <h1>Welcome to <strong>Spice Garden</strong> </h1>
                <span>Where taste means tradition</span>
                <p id="hero-p">Step into The Spice Garden, where every dish is crafted with love, passion,
                    and authentic flavors. From aromatic Indian curries to sizzling tandoori specials,
                    we bring you the perfect blend of tradition and taste.
                    Our chefs use only the freshest ingredients to
                    create dishes that delight your senses and make every meal memorable.</p>
            </div>

            {/* <a href="#menu" className="anchor">Explore Menu</a> */}
            <Link to="/menu" className="anchor">Explore Menu</Link>
        </div>
    )
}