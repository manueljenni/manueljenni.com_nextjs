"use client";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function page() {
  const [cols, setCols] = useState(3);

  // Based on the screen size, change the number of columns useEffect

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setCols(1);
      } else if (window.innerWidth < 900) {
        setCols(2);
      } else {
        setCols(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Masonry
        breakpointCols={cols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <img src="/img/nyc-feb-2024/venice-beach.JPG" alt="" />
        <img src="/img/nyc/dumbo.jpg" alt="" />
        <img src="/img/bangkok/king-power.JPG" alt="" />
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
    </div>
  );
}
