import ProductHeader from "@/components/ProductHeader";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { fetchProductDetail } from "@/api";

export default function ProductDetailPage({ productInfo }: any) {
    return (
        <div>
            <ProductHeader title="상품 상세 정보" />
            <p>{productInfo.name}</p>
        </div>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    console.log(context?.params?.productId);

    const id = context?.params?.productId;
    // const response = await axios.get(`http://localhost:4000/products/${id}`);

    if (typeof id !== "string") {
        return {
            notFound: true,
        };
    }

    const { data } = await fetchProductDetail(id);

    return {
        props: {
            productInfo: data,
        },
    };
}
