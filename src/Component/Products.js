// products.js
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './Store/cartslice';
import { getProducts } from './Store/productslice';

const Products = () => {
  const products = useSelector(state => state.products.data);
  const cartProducts = useSelector(state => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    // This useEffect will run after the cartProducts state has been updated
    cartProducts.forEach(product => {
      console.log('Product ID:', product.id, 'Quantity:', product.quantity);
    });
  }, [cartProducts]);

  const addToCart = (product) => {
    dispatch(add(product));
    console.log('this is the quantity =',product.quantity)
    // Find the updated product in the cart
    const cartProduct = cartProducts.find(item => item.id === product.id);
    console.log('this is the quantity =', cartProduct ? cartProduct.quantity : 0);
  }

  const card = products.map(product => (
    <div key={product.id} className='col-md-2 mx-3 my-3'>
      <Card style={{ width: '400px', height: '550px' }}>
        <div className='text-center my-1'>
          <Card.Img variant="center" src={product.image} style={{ width: '350px', height: '300px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>$ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Button variant="primary" onClick={() => addToCart(product)}>ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row' style={{ marginTop: '80px' }}>
      {card}
    </div>
  );
}

export default Products;
