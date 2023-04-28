import React from "react";
import { useContext } from "react";
import ShoppingContext from "../../context/ShoppingContext";

function Personal(){

    const {total,cart,address} = useContext(ShoppingContext)

    return(
        <div className="person">
            <div className="orders">
                
            </div>
            <div className="add">
                {address.name}
                {address.add}
            </div>
        </div>
    )
}

export default Personal