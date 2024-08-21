"use client";
import React from "react";

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("Click me");
      }}
    >
      Click me
    </button>
  );
}
