"use client";
import React, { useState } from "react";

export const Functions = () => {
  const [count, setCount] = useState<number>(0);

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };
};
