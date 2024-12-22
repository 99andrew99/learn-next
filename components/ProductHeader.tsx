import React from "react";

export default function ProductHeader({ title }: { title: string }) {
    return <h1 className="text-xl font-bold">{title}</h1>;
}
