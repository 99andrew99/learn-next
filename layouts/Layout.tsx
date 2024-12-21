import Link from "next/link";
import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <nav>
                <Link href={"/"}>상품 목록</Link> |{" "}
                <Link href={"/cart"}>장바구니</Link>
            </nav>
            <div>{children}</div>
        </div>
    );
}
