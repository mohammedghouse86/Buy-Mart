import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
    const [things, setThings] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setThings(json))},[])

    const card = things.map(product  => {
        return(
        <div className='col-md-2 mx-3 my-3'>
            <Card key={product.id} style={{ width: '400px', height:'550px'}}>
                <div className='text-center my-1'>
              <Card.Img variant="center" src={product.image} style={{ width: '350px', height:'300px'}} />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                {product.category} 
                </Card.Text>
                <Card.Text>
                $ {product.price} 
                </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                <Button variant="primary">ADD TO CART</Button>
                </Card.Footer>
            </Card></div>)})
  return (
    <div className='row'>
      {card}
    </div>
  )
}

export default Products






