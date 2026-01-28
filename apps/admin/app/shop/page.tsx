"use client";
import React from "react";
import Item from "../../components/item";
import { image } from "../../lib";
import AdminHeaderClient from "../adminHeaderClient";
import { SearchInput } from "@repo/ui/searchInput";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16 md:p-24">
      <AdminHeaderClient />
      <div>
        <SearchInput reference={() => {}} onChange={() => {}} />
      </div>
      <div className="grid grid-cols-3 gap-2 h-full w-full p-2">
        {" "}
        <Item
          image={image}
          description="donen very good"
          price={30}
          title="pen"
          delete={() => alert("item deleted")}
          edit={() => alert("items editted")}
        />
        <Item
          image={image}
          delete={() => alert("item deleted")}
          edit={() => alert("items editted")}
          description="donen very good"
          price={30}
          title="pen"
        />
        <Item
          image={image}
          delete={() => alert("item deleted")}
          edit={() => alert("items editted")}
          description="donen very good"
          price={30}
          title="pen"
        />
      </div>
    </div>
  );
};

export default Page;
