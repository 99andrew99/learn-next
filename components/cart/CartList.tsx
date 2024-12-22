import React from "react";
import Image from "next/image";
import { removeCartItem } from "@/api";
import { useRouter } from "next/router";
import axios from "axios";

export default function CartList({ carts }: any) {
    const router = useRouter();

    const totalPrice = carts.reduce((acc: any, cur: any) => {
        return acc + parseFloat(cur.price);
    }, 0);

    const removeCart = async (id: any) => {
        // const { data } = await removeCartItem(id);
        const response = await axios.post("http://localhost:3000/api/carts", {
            id: id,
        });
        console.log(response);
        // alert(`${data.name}가 삭제됨`);
        router.replace(router.asPath);
    };

    return (
        <div>
            <div>
                <ul>
                    {carts.map((cart: any) => {
                        return (
                            <li key={cart.id} className="flex">
                                <div>
                                    <Image
                                        src={cart.imageUrl}
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="ml-[10px]">
                                    <div>{cart.name}</div>
                                    <div>{cart.price}</div>
                                    <button onClick={() => removeCart(cart.id)}>
                                        아이템 삭제
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p>총 가격: {totalPrice}</p>
                <p>총 수량: {carts.length}</p>
            </div>
        </div>
    );
}
