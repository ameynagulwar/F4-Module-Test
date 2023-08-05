import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="head">TravelMedia.in</h2>
            <div className="logo">
                 <a id="img"><img src={require("./Home.png")}/></a>
                 <a><img src={require("./bell.png")}/></a>
                 <a><img src={require("./person.png")}/></a>
                 <a id="img2"><img src={require("./share.png")}/></a>
            </div>
        </div>
    )
}

export default Navbar;