import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Herder from "../../components/Herder";
import Nav from '../../components/Nav'
import ProductList from "../../components/ProductList";
import Search from "../../components/Search";

type Props = {};

const Websitelayout = (props: Props) => {
  return (
    <div>
      <header>
        <div className="text-center">
          <img src="https://picsum.photos/130/40" alt="" />
        </div>
      <Herder/>
       <Banner/>
       <Outlet/>
      </header>
    </div>
  );
};

export default Websitelayout;
