import React, {Component} from "react";
import Data from "./Data";

class Add extends Component {
    constructor(props) {
        super(props);
        this.list = Data("products");

        this.state = {
            id: this.list.length > 0 ? parseInt(this.list[this.list.length - 1].id) + 1 : 1, 
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        event.preventDefault();
    }

    saveProducts() {
        localStorage.setItem("products", JSON.stringify(this.list));
    }

    handleSubmit() {
        // Cập nhật lại list mới nhất
        this.list = JSON.parse(localStorage.getItem("products")) || [];

        let newId = this.list.length > 0 ? parseInt(this.list[this.list.length - 1].id) + 1 : 1;

        let newProduct = {
            ...this.state,
            id: newId
        };

        this.list.push(newProduct);

        this.saveProducts();

        alert("Một sản phẩm đã được thêm vào!");
    }

    render() {
        return (
            <div className="col-sm-4">
                <div id="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Dép"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name_category">Category</label>
                        <select
                            className="form-control"
                            id="name_category"
                            name="name_category"
                            onChange={this.handleChange}
                            defaultValue="Thời trang nam"
                        >
                            <option value="Thời trang nam">Nam</option>
                            <option value="Thời trang nữ">Nữ</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            className="form-control"
                            id="code"
                            name="code"
                            placeholder="XXXXXXX"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="form-control"
                            placeholder="https://example.com/image.jpg"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="10000"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="old_price">Old price</label>
                        <input
                            className="form-control"
                            id="old_price"
                            name="old_price"
                            placeholder="1500"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        id="submit"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default Add;