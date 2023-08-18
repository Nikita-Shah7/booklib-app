

function Cart(item) {
   
    return(
        <tr>
            <td>{item.book_id}</td>
            <td>{item.title}</td>
        </tr>
    );
}

export default Cart;