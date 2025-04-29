import React from "react";
import Logo from "../../../assets/img/Logo.png";
import Image from "next/image";
import SigninForm from "@/components/Signinform/Signinform";

function page() {
  return (
    <div className="flex flex-col w-[60%]">
      <div className="text-center w-full flex justify-center items-center mb-5">
        <Image src={Logo} alt="logo" />
      </div>
      <SigninForm />
    </div>
  );
}

export default page;
