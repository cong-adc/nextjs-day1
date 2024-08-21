import Button from "@/components/button";
import React from "react";

export default function PostDetail({ params }) {
  console.log("====================================");
  console.log({ params });
  console.log("====================================");

  return (
    <div>
      PostDetail {params.slug}
      <Button />
    </div>
  );
}
