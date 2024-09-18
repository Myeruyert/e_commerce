import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-290px)] items-center bg-gray-100">
      <span className="loading loading-spinner text-[#0166FF] mt-24 mb-2"></span>
      <ClipLoader />
      <p className="text-slate-900 font-semibold text-base">
        Түр хүлээнэ үү...
      </p>
    </div>
  );
};

export default Loading;
