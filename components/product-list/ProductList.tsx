import { ProductType } from "@/pages";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductList.module.css";
import Link from "next/link";
import { fetchProducts } from "@/api";

export default function ProductList() {
    const [products, setProducts] = useState<ProductType[] | undefined>();

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    console.log(products);

    return (
        <ul>
            {products &&
                products.map((product) => {
                    return (
                        <li key={product?.id} className={styles.item}>
                            <Link href={`/products/${product.id}`}>
                                <div>
                                    <Image
                                        src={product.imageUrl}
                                        width={300}
                                        height={250}
                                        alt={product.name}
                                    />
                                </div>
                                <div>{product.name}</div>
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
}
