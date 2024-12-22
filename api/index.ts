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

export { fetchProducts, fetchProductDetail };
