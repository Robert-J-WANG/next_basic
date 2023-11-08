"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [date, setDate] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]); // 指定初始值为一个空数组
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res);
    setProducts(res.data.products);
    setDate(new Date().toString());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Product Page</h1>
      <h2>{date}</h2>
      <div className="box flex flex-col gap-5">
        {products.map((product) => (
          <h1 key={product.id}>
            {product.title} /{product.brand} : {product.price}
          </h1>
        ))}
      </div>
    </div>
  );
}
