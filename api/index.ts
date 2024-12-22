import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
});

// 상품 목록 조회
function fetchProducts() {
    return instance.get("/products");
}

async function fetchProductDetail(id: string) {
    return await instance.get(`/products/${id}`);
}

//장바구니 아이템 추가
function createCartItem({
    id,
    name,
    imageUrl,
    price,
}: {
    id: any;
    name: any;
    imageUrl: any;
    price: any;
}) {
    return instance.post("/carts", {
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
    });
}

function fetchCarts() {
    return instance.get("/carts");
}

function removeCartItem(id: any) {
    return instance.delete(`/carts/${id}`);
}

export {
    fetchProducts,
    fetchProductDetail,
    createCartItem,
    fetchCarts,
    removeCartItem,
};
