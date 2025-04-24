import React, {useState, useEffect} from "react";
function FetchAPI_function() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
            .then(response => response.json())
            .then(data => {
                const filterData = data.map(item =>({
                    name: item.name,
                    avatar: item.avatar
                }));
                 setProducts(filterData );
            })
            .catch(error => console.error('Error fetching data:', error));
        }, []); // [] đảm bảo chỉ gọi 1 lần khi component mount

        return (
            <div>
                <div id='container' style={{display:'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {products.map(product => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={product.avatar} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        </div>
                    </div>
                ))}
              </div> 
            </div>
        );
}

export default FetchAPI_function;
