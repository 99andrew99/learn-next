import ProductHeader from "@/components/ProductHeader";
import ProductList from "@/components/ProductList";

function ProductPage() {
    const headerTitle = "상품 목록 페이지";
    return (
        <div>
            <ProductHeader title={headerTitle} />
            <ProductList></ProductList>
        </div>
    );
}

export default ProductPage;

export type ProductType = {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
};
