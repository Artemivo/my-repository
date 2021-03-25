import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {removeProduct} from '../redux/actions/product'

function CartItem(props) {
    const product = props.item
    const dispatch = useDispatch()
    function removeFromCart(id) {
        dispatch(removeProduct(product.id))
    }
    
    
    return (
        <div>
            
            <li className="cart-list-item">
                            <ul className="cart-item_list-amount">
                                <li className="cart-item_list-amount_item">{product.soybean}%</li>
                                <li className="cart-item_list-amount_item">{product.sesame}%</li>
                                <li className="cart-item_list-amount_item">{product.wheat}%</li>
                                <li className="cart-item_list-amount_item">{product.corn}%</li>
                            </ul>
                            <div className="cart-item_list-amount_info">
                                <p className="cart-item_list-amount_info-item">{product.weight}Kg</p>
                                <p className="cart-item_list-amount_info-item">{Math.round(product.price*100)/100}$</p>

                            </div>
                            <button onClick={removeFromCart} className="cart-list-item_button">X</button>
                        </li>
                        

        </div>
    )
}

export default CartItem
