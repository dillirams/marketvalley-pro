"use client";
import React from "react";
import AdminHeader from "../components/adminHeader";

const AdminHeaderClient = () => {
  return (
    <div>
      <AdminHeader
        handleShop={() => alert("go to shop")}
        handleMessages={() => alert("go to messages")}
        handleProfile={() => alert("go to profile")}
        count={3}
      />
    </div>
  );
};

export default AdminHeaderClient;
