import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "my restaurant",
  category: "Korean foods",
  address: {
    city: "Munich",
    detail: "Sonnenstr 92",
    zipCode: 25367,
  },
  menu: [
    { name: "pasta", price: 20, category: "italian" },
    { name: "pizza", price: 24, category: "italian" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestauran] = useState<Restaurant>(data);
  const ChangeAddress = (address: Address) => {
    setMyRestauran({ ...myRestaurant, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      <Store info={data} changeAddress={ChangeAddress} />
      <BestMenu
        name="seafood"
        category="japanese"
        price={100}
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
