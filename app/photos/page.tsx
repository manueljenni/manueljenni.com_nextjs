"use client";
import Masonry from "react-masonry-css";

export default function page() {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      <img src="/img/nyc-feb-2024/venice-beach.JPG" alt="" />
      <img src="/img/nyc/dumbo.jpg" alt="" />
      <img src="/img/bangkok/king-power.jpg" alt="" />
      <img src="/img/japan-2022/tokyo-1.jpg" alt="" />
      <img src="/img/japan-2022/tokyo-2.jpg" alt="" />
      <img src="/img/japan-2022/tokyo-3.jpg" alt="" />
      <img src="/img/japan-2022/osaka-2.jpg" alt="" />
      <img src="/img/japan-2022/osaka-1.jpg" alt="" />
      <img src="/img/japan-2022/osaka-3.jpg" alt="" />
      <img src="/img/japan-2022/kyoto-1.jpg" alt="" />
      <img src="/img/japan-2022/kyoto-2.jpg" alt="" />
      <img src="/img/japan-2022/kyoto-3.jpg" alt="" />
    </Masonry>
  );
}
