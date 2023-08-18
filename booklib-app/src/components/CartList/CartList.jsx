import './CartList.css'
import './CartItem'
import { Link } from "react-router-dom";
import Cart from './CartItem';
import Client from '../AxiosCreate';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


function CartList() {

    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([]);
     
     useEffect( () => {
        Client.get('').then((response) => {
            const fetchedCartItems = response.data.map((item) => ({
              ...item,
              book_id: item.book_id,
              title: item.title
            }));
            setCartItems(fetchedCartItems);
          });
            // console.log(cartItems.length)   
    },[cartItems]);


    return(
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                    <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
                        <FaArrowLeft size={22} />
                        <span className='fs-18 fw-6'>Go Back</span>
                    </button>
                        <h2>My <b>Cart</b></h2>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Book_ID</th>
                        <th>Book_Title</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        cartItems.map((item) => {
                            // console.log(item)
                            return (
                                <Cart {...item} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default CartList;