import React, { useState } from "react";

const ProductOrder = () => {
  const [products] = useState([
    { id: 1, name: "Cà phê sữa", price: 12000 },
    { id: 2, name: "Cà phê đá", price: 10000 },
    { id: 3, name: "Sting dâu", price: 8000 },
    { id: 4, name: "Trà đá", price: 2000 }
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [money, setMoney] = useState('');
  const [result, setResult] = useState('');

  const handleCheckboxChange = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(item => item !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const handleOrder = () => {
    const moneyNumber = parseInt(money);
    if (isNaN(moneyNumber) || moneyNumber <= 0) {
      setResult("Vui lòng nhập số tiền hợp lệ.");
      return;
    }
    if (selectedProducts.length === 0) {
      setResult("Vui lòng chọn ít nhất một sản phẩm.");
      return;
    }

    const totalPrice = selectedProducts.reduce((sum, id) => {
      const product = products.find(p => p.id === id);
      return sum + (product ? product.price : 0);
    }, 0);

    if (moneyNumber >= totalPrice) {
      const change = moneyNumber - totalPrice;
      setResult(`Đặt hàng thành công! Số tiền còn lại: ${change.toLocaleString()} VND`);
    } else {
      setResult(`Không đủ tiền để đặt hàng. Bạn cần thêm ${(totalPrice - moneyNumber).toLocaleString()} VND`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Danh sách sản phẩm</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "8px" }}>
          <input
            type="checkbox"
            id={`product-${product.id}`}
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleCheckboxChange(product.id)}
          />
          <label htmlFor={`product-${product.id}`}>
            {product.name} - {product.price.toLocaleString()} VND
          </label>
        </div>
      ))}

      <br />
      <div>
        <label htmlFor="money">Nhập số tiền bạn hiện có: </label>
        <input
          type="number"
          id="money"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          min="0"
        />
      </div>

      <br />
      <button onClick={handleOrder}>Đặt hàng</button>

      <h3 style={{ marginTop: "20px", color: "green" }}>{result}</h3>
    </div>
  );
};

export default ProductOrder;
