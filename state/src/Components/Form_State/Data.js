function Data(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                // Áo nam
                {
                    id: "1",
                    name: "Áo phông nam màu trắng hàng hiệu in logo xanh Hiddle",
                    category: "Nam",
                    code: "AO001",
                    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/6-2.png",
                    price: 20000,
                    oldprice: 25000
                },
                {
                    id: "2",
                    name: "Áo sơ mi nam",
                    category: "Nam",
                    code: "AO002",
                    image: "https://down-vn.img.susercontent.com/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
                    price: 30000,
                    oldprice: 35000
                },
                {
                    id: "3",
                    name: "Áo thun nam polo trắng trẻ trung (AXH-171)",
                    category: "Nam",
                    code: "AO003",
                    image: "https://zeanus.vn/upload/product/zn-0127/ao-thun-nam-polo-trang-tre-trung-axh-171.jpg",
                    price: 40000,
                    oldprice: 45000
                },
                
                // Áo nữ
                {
                    id: "4",
                    name: "Áo thun lỡ tay form rộng",
                    category: "Nữ",
                    code: "AO004",
                    image: "https://youmagix.com/wp-content/uploads/2022/08/YM0023.png",
                    price: 18000,
                    oldprice: 22000
                },
                {
                    id: "5",
                    name: "Áo sơ mi in hình Quỳnh Aka",
                    category: "Nữ",
                    code: "AO005",
                    image: "https://img.lazcdn.com/g/p/e8f5072fe48b52450e3c5b305ca32a46.jpg_720x720q80.jpg",
                    price: 25000,
                    oldprice: 30000
                },
                {
                    id: "6",
                    name: "Áo thun Form vừa",
                    category: "Nữ",
                    code: "AO006",
                    image: "https://danangsale.vn/wp-content/uploads/2023/01/z4024749882775_78bd2733e2f281fc50dacb2c3d04e22f-1024x1024.jpg",
                    price: 35000,
                    oldprice: 40000
                }
            ];
            
        return products;
        default:
        return [];
    }
}
  
export default Data;
  