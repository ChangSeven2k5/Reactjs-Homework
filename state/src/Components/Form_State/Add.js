import React from 'react';
import { Navigate } from 'react-router-dom'; 
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      name_category: '',
      code: '',
      image: '',
      price: '',
      old_price: '',
      redirect: false,
      list: JSON.parse(localStorage.getItem('products')) || [],
    };
  }

  handleSubmit(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    const updatedList = [...this.state.list, {
      id: this.state.id,
      name: this.state.name,
      name_category: this.state.name_category,
      code: this.state.code,
      image: this.state.image,
      price: parseFloat(this.state.price),
      oldPrice: parseFloat(this.state.old_price),
    }];

    localStorage.setItem("products", JSON.stringify(updatedList));
    alert("Một sản phẩm đã được thêm vào!");
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/products" />; // Use Navigate for redirection
    }

    return (
      <div className="container">
        <h2>Add Product</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="id">Product ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name_category">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="name_category"
              value={this.state.name_category}
              onChange={(e) => this.setState({ name_category: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Product Code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              value={this.state.code}
              onChange={(e) => this.setState({ code: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="image"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="old_price">Old Price</label>
            <input
              type="number"
              className="form-control"
              id="old_price"
              value={this.state.old_price}
              onChange={(e) => this.setState({ old_price: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
