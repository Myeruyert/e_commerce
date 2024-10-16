import React, { useContext, useState } from "react";
import Comments from "./comment";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
// import { Rating } from "@mui/material";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Typography from "@mui/material/Typography";
import { ProductContext } from "../context/product_context";
import { useParams } from "next/navigation";

const RatingSection = () => {
  // const [value, setValue] = React.useState<number | null>(2);
  const { id } = useParams();
  const { rating, setRating, comment, setComment, newComment, oneProduct } =
    useContext(ProductContext);

  return (
    <div className="">
      {oneProduct.comment?.map((com) => (
        <Comments com={com} />
      ))}

      <div className="mt-6">
        <Card className="w-[510px] p-6 bg-[#F4F4F5]">
          <div>
            <span className="text-sm font-semibold mb-4">Одоор үнэлэх:</span>
            {/* <FaStar className="text-[#FDE047] text-xl" /> */}
            {/* <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                className="text-[#FDE047]"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box> */}
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
          <div className="my-6">
            <span className="text-sm font-semibold">Сэтгэгдэл үлдээх:</span>
            <Textarea
              className="mt-2"
              placeholder="Энд бичнэ үү"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>

          <Button
            className="bg-[#2563EB]"
            size="custom"
            onClick={() => {
              newComment(id);
            }}
          >
            Үнэлэх
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default RatingSection;
