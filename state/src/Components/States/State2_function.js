import React, { useState } from 'react';
import { getData } from './data';

const ProductList = () => {
    const [products, setProducts] = useState(getData);

    return(
        <div>
              <div id='container' style={{display:'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {products.map(product => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.loai}</p>
                        </div>
                    </div>
                ))}
              </div>  
            </div>
    )
}

export default ProductList;