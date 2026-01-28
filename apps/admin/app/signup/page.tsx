"use client";

import { Button } from "@repo/ui/button";
import Input from "@repo/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import Imageupload from "../../components/imageupload";

interface signupform {
  shopname: string;
  contact_number: number;
  location: string;
  email: string;
  shoplicense: File;
}

const Page = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signupform>();
  async function signup(data: signupform) {
    console.log(data);
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen ">
      <h1 className="flex"> Signup</h1>
      <form
        onSubmit={handleSubmit(signup)}
        className="flex flex-col h-[80%] w-[80%] md:h-[50%] md:w-[50%] gap-10 "
      >
        <Input
          label="Your Name"
          placeholder="Enter your name"
          register={register}
          minlength={5}
          maxlength={10}
          errors={errors}
          required={true}
          inputtype="text"
          name="userName"
          size="sm"
          label_size="md"
        />
        <Input
          label="Shop Name"
          placeholder="Enter your shop name"
          register={register}
          minlength={5}
          maxlength={10}
          errors={errors}
          required={true}
          inputtype="text"
          name="shopName"
          size="md"
        />
        <Input
          label="Shop Name"
          placeholder="Enter your shop name"
          register={register}
          minlength={5}
          maxlength={10}
          errors={errors}
          required={true}
          inputtype="text"
          name="shopName"
          size="lg"
        />
        <Imageupload
          register={register}
          name="licenseImage"
          size={2}
          errors={errors}
        />
        <Button
          type={"submit"}
          size="md"
          fullWidth={true}
          title="Submit"
          variant="primary"
          font="bold"
          click={() => console.log("submited data")}
        />
      </form>
    </div>
  );
};

export default Page;
