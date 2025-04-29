import React, { useEffect, useState } from 'react';
import data from './path/to/data'; // Đảm bảo đường dẫn đúng tới file chứa dữ liệu

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu sản phẩm từ hàm data
    const productsData = data('products');
    setProducts(productsData);
  }, []);

  return (
    <div className="container">
      <h2>Danh sách sản phẩm</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Giá cũ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.oldprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
