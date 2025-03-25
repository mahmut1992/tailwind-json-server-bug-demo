import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../Loader";
import Error from "../error";
import { FaFire } from "react-icons/fa";
import RestaurantProductCard from "../RestaurantProductCard";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  return (
    <div>
      {err ? (
        <Error />
      ) : !products ? (
        <Loader />
      ) : products.length == 0 ? (
        <p className="p-3 text2xl font-semibold">
          Bu restauranta ait ürün bulunamadı
        </p>
      ) : (
        <div>
          <h2 className="flex gap-2 text-2xl">
            <FaFire className="text-red-500" /> Popüler
          </h2>
          <p className="text-gray-600 mt-2">
            Restaurantın en çok tercih edilen ürünleri
          </p>
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            {products &&
              products.map((item) => (
                <RestaurantProductCard key={item.id} item={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantProducts;
