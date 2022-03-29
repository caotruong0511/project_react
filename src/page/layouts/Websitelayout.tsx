import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Foodter from "../../components/Foodter";
import Herder from "../../components/Herder";
import Nav from '../../components/Nav'
import ProductList from "../../components/ProductList";
import Search from "../../components/Search";

type Props = {};

const Websitelayout = (props: Props) => {
  return (
    <div>
      <header>
     
      <Herder/>
       <Banner/>
      </header>
      <main>
      <Outlet/>
      </main>
      <footer>
        <Foodter/>
      </footer>
    </div>
  );
};

export default Websitelayout;
