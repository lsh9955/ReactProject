import React, { useEffect, useState } from "react";
import axios from "axios";
const Food = ({ thisPlace }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [foodData, setFoodData] = useState("");

  const API_KEY = process.env.REACT_APP_FOODMAP;
  const url = `//openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?KEY=${API_KEY}&Type=json&pIndex=1&pSize=50&SIGUN_NM=${thisPlace}`;
  // console.log(url);

  useEffect(
    () =>
      axios.get(url).then((response) => {
        const data = response.data;
        let foodIndex = data["PlaceThatDoATasteyFoodSt"] === undefined ? "" : data.PlaceThatDoATasteyFoodSt[1].row.map((v, i) => <div>{v["RESTRT_NM"]}</div>);
        setIsLoading(true);
        setFoodData(foodIndex);
        console.log(foodData);
      }),
    thisPlace
  );

  //   if (isLoading) {
  //     const foodData = () => {
  //       return "A";
  //       data && data["RESULT"]["CODE"] === "INFO-200" ? "경기도만 지원 가능합니다" : "";
  //     };
  //   }
  //   data["PlaceThatDoATasteyFoodSt"]["1"]["row"]
  //   data.PlaceThatDoATasteyFoodSt[1].row.map((v, i) => v["RESTRT_NM"]);

  // data["PlaceThatDoATasteyFoodSt"] === undefined ? "경기도만 검색 가능합니다" : data.PlaceThatDoATasteyFoodSt[1].row.map((v, i) => v["RESTRT_NM"]);}

  return (
    <>
      <div>{thisPlace}</div>
      <div>{foodData}</div>
    </>
  );
};
export default Food;
