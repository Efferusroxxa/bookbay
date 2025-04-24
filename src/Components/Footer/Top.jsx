import React from "react";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Iconify from "../Iconify/Iconify";

const Top = () => {
  return (
    <section className="border-t border-gray-200 pt-5">
      <div className="container mx-auto py-3 grid grid-4">
        <div>
          <h3 className="font-bold text-secondary pb-8">NEED HELP?</h3>
          <div className="flex flex-col gap-1 text-black opacity-55">
            <span>Help Center </span>
            <span>Shipping </span>
            <span> FAQs </span>
            <span>Pickup in </span>
            <span>Store </span>
            <span>Order Stutus </span>
            <span>Product</span>
            <span> Recalls </span>
            <span>Corrections & Updates </span>
            <span>Gift Cards</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-secondary pb-8">ABOUT US </h3>
          <div className="flex flex-col gap-1 text-black opacity-55">
            <span>Contact Us </span>
            <span>Track Your Dedier</span>
            <span>Returzes Policy </span>
            <span>Delivery Information </span>
            <span>Loyalty Program </span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-secondary pb-8">CATEGORIES </h3>
          <div className="flex flex-col gap-1 text-black opacity-55">
            <span>Coupons </span>
            <span>RX Prescription </span>
            <span>Scholarship Program </span>
            <span>Brand Directory</span>
            <span>E-Catalogs/Requests</span>
            <span>Order Form </span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-secondary pb-8">OUR NEWSLETTER</h3>
          <div className="flex flex-col gap-5">
            <span className=" text-black opacity-55">
              Sign up for our latest news and offers
            </span>
            <div className="flex items-center bg-tertiary">
              <div className=" flex items-center gap-2  px-4">
                <Input
                  //   label="Username"
                  //   name="username"
                  className="p-0 border-0 w-92"
                  placeholder="Your Email Address"
                />
              </div>
              <Button variant="secondary">
                <Iconify icon={"oui:email"}></Iconify>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
