import { createCartItem } from "@/api";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function ProductInfo({ productDetail }: { productDetail: any }) {
    const router = useRouter();

    const addCart = async () => {
        const response = await createCartItem(productDetail);
        console.log(response);
        router.push("/cart");
    };

    return (
        <div className="flex">
            <div>
                <Image
                    src={productDetail.imageUrl}
                    alt=""
                    width={250}
                    height={250}
                />
            </div>
            <div className="ml-[10px]">
                <p>{productDetail.name}</p>
                <p>{productDetail.price}</p>
                <button
                    className="p-[10px] bg-gray-50 text-black rounded-md font-semibold"
                    onClick={addCart}
                >
                    장바구니 담기
                </button>
            </div>
        </div>
    );
}
