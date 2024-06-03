import React from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { remove } from './Store/cartslice';

const Cart = () => {
  const cartProducts = useSelector(state => state.cart);
  console.log(cartProducts);
  const dispatch = useDispatch();
  const removeFromCart = (product) => {dispatch(remove(product))}
  const Products = cartProducts.map(product => {
    return (
      <div className='col-md-2 mx-3 my-3'>
        <Card key={product.id} style={{ width: '400px', height: '600px' }}>
          <div className='text-center my-1'>
            <Card.Img variant="center" src={product.image} style={{ width: '350px', height: '300px' }} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.category}
            </Card.Text>
            <Card.Text>
              Unit cost = $ {product.price}
            </Card.Text>
            <Card.Text>
              Total cost = $ {product.price*product.quantity}
            </Card.Text>
            <Card.Text>
              Quantity = {product.quantity}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center'>
                <Button variant="danger" onClick = {() => removeFromCart(product)}>REMOVE</Button>
                </Card.Footer>
        </Card></div>)
  })
  return (
    <div className='row'>
      {Products}
    </div>
  )
}

export default Cart
