"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Sags from "@/components/order_section/sags";
import DeliveryInfo from "@/components/order_section/delivery_info";
import { Payment } from "@/components/order_section/payment";
import SuccessToast from "@/components/order_section/success_toast";

const steps = ["Сагслах", "Хүргэлтийн мэдээлэл оруулах", "Төлбөр төлөх"];

const BuySteps = () => {
  return (
    <div className=" flex flex-col bg-gray-100 dark:bg-[#121212]">
      <div className="pt-8 w-1/2 m-auto">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div className=" ">
        <Sags />
        {/* <DeliveryInfo /> */}
        {/* <Payment /> */}
        {/* <SuccessToast /> */}
      </div>
    </div>
  );
};

export default BuySteps;
