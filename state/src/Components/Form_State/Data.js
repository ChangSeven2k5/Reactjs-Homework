function data(dataName) {
    switch (dataName) {
        case "products":
        const products = [
            {
                id: "1",
                name: "Dép quai hậu",
                category: "Nam",
                code: "DEP001",
                image: "depquaihau.jpg",
                price: 10000,
                oldprice: 15000
            },
            {
                id: "2",
                name: "Dép tổ ong",
                category: "Nam",
                code: "DEP002",
                image: "deptoong.jpg",
                price: 12000,
                oldprice: 17000
            },
            {
                id: "3",
                name: "Dép đi mưa",
                category: "Nam",
                code: "DEP003",
                image: "depdimua.jpg",
                price: 9000,
                oldprice: 14000
            },
            {
                id: "4",
                name: "Dép sandal",
                category: "Nam",
                code: "DEP004",
                image: "depsandal.jpg",
                price: 15000,
                oldprice: 20000
            },
            {
                id: "5",
                name: "Dép bông mềm",
                category: "Nữ",
                code: "DEP005",
                image: "depbongmem.jpg",
                price: 11000,
                oldprice: 16000
            },
            {
                id: "6",
                name: "Dép thời trang",
                category: "Nữ",
                code: "DEP006",
                image: "deptthoitrang.jpg",
                price: 13000,
                oldprice: 18000
            },
            {
                id: "7",
                name: "Dép đi biển",
                category: "Nữ",
                code: "DEP007",
                image: "depdibien.jpg",
                price: 9500,
                oldprice: 14000
            },
            {
                id: "8",
                name: "Dép cao gót",
                category: "Nữ",
                code: "DEP008",
                image: "depcaugot.jpg",
                price: 20000,
                oldprice: 25000
            }
            ];
        return products;
        default:
        return [];
    }
}
  
export default data;
  