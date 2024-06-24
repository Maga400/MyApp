import React from 'react'
import { products } from '../../data';
import './Product.css'
import { GetImageUrl } from '../../Utils';

function Item({product})
{
    let currentDateTime = new Date();
    
    let productDateTime = new Date(product.expireDate);
    
    if(productDateTime < currentDateTime){
        return <section style={{backgroundColor:"darkmagenta",margin:"50px",padding:"30px",display:'flex',borderRadius:"20px",border:"3px solid black",position:"relative"}}>
          <section>
          <img style={{width:"200px",height:"200px"}} src={GetImageUrl(product)}></img>
          </section>
          <section>
              <h1>{product.id}</h1>
              <h1>{product.name}</h1>
              <h1>{product.description}</h1>
              <h1>{product.expireDate}</h1>
              <h1>{product.price}$-------{product.discount}$</h1>
          </section>
          <img style={{position:"absolute",top:"-10px",left:"-10px",width:"100px",height:"100px"}} src="/images/Expire.png"></img>
        </section>;
    }
    
    return <section style={{backgroundColor:"darkmagenta",margin:"50px",padding:"30px",display:'flex',borderRadius:"20px",border:"3px solid black"}}>
        <section>
        <img style={{width:"200px",height:"200px"}} src={GetImageUrl(product)}></img>
        </section>
        <section>
            <h1>{product.id}</h1>
            <h1>{product.name}</h1>
            <h1>{product.description}</h1>
            <h1>{product.expireDate}</h1>
            <h1>{product.price}$-------{product.discount}$</h1>
        </section>
    </section>;
}


export default function Product() {
  return (
    <section className='section-design'>
      {
        products.map((p) => (<Item product = {p}></Item>))
      }
    </section>
  )
}
