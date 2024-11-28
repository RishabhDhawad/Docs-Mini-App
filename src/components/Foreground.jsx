import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  // desc, filesize, closeOrDownload, tagdetails
  const data = [
    {
      desc: "A detailed guide on implementing Agile methodologies in your software projects.",
      filesize: "1.2 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Read Now", tagColor: "green" },
    },
    {
      desc: "An in-depth blueprint outlining scalable software architecture principles.",
      filesize: "2.7 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "View Blueprint", tagColor: "blue" },
    },
    {
      desc: "Comprehensive API documentation for seamless integration and development.",
      filesize: "1.8 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Access API Docs ", tagColor: "green" },
    },
    {
      desc: "Best practices for managing code effectively with version control systems.",
      filesize: "0.9 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Guide", tagColor: "green" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
