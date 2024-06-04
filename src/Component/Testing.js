import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Testing = () => {
    const products = useSelector(state => state.products.data);
    const cartProducts = useSelector(state => state.cart);  
    const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '80px' }}>

    </div>
  )
}

export default Testing
