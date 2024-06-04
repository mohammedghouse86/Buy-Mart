import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from './Store/cartslice';
import { add_qty } from './Store/cartslice';
import { del_qty } from './Store/cartslice';
import { selectGrandTotal } from './Store/cartslice';

const Cart = () => {
  const grandTotal = useSelector(selectGrandTotal);
  const cartProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (product) => { dispatch(remove(product)) }
  const [num, setNum] = useState(0)
  const [quantities, setQuantities] = useState(() =>
    cartProducts.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, event, product) => {
    setNum(quantities[product.id]);
    const newQuantity = event.target.value;  
    const oldQuantity = quantities[product.id];
    setQuantities({
      ...quantities,
      [productId]: newQuantity
    });
    if(newQuantity>oldQuantity){
    dispatch(add_qty(product))}
    else if(newQuantity<oldQuantity){
      dispatch(del_qty(product))}
    console.log("new quantity = ",newQuantity,'old quantity = ',oldQuantity, 'this is quantities[product.id] =', quantities[product.id]);
  }

  const Products = cartProducts.map(product => (
    <div className='col-md-2 mx-3 my-3' key={product.id}>
      <Card style={{ width: '400px', height: '600px' }}>
        <div className='text-center my-1'>
          <Card.Img variant="center" src={product.image} style={{ width: '350px', height: '300px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>Unit cost = $ {product.price}</Card.Text>
          <Card.Text>Total cost = $ {product.price * quantities[product.id]}</Card.Text>
          <Card.Text>
            Quantity = <input
              type='number'
              step='1'
              value={quantities[product.id]}
              onChange={(e) => handleQuantityChange(product.id, e,product)}
              style={{ width: '50px' }}
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Button variant="danger" onClick={() => removeFromCart(product)}>REMOVE</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row'>
      {Products}
    </div>
  );
}

export default Cart;
