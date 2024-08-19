import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("/image/img-1.png");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          setImage(`/image/img-${index + 2}.png`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex">
      <div className="sticky top-0 h-screen w-1/3 bg-lime-200 flex items-center justify-center">
        <img src={image} className="w-[400px]" alt="Sticky" />
      </div>
      <div className="w-2/3 p-4 space-y-20">
        <div className="section h-[50vh]">
          <h2 className="text-2xl font-bold mb-4">Section 1</h2>
          <p className="text-lg">This is the content of Section 1.</p>
        </div>
        <div className="section h-[50vh]">
          <h2 className="text-2xl font-bold mb-4">Section 2</h2>
          <p className="text-lg">This is the content of Section 2.</p>
        </div>
        <div className="section h-[50vh]">
          <h2 className="text-2xl font-bold mb-4">Section 3</h2>
          <p className="text-lg">This is the content of Section 3.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
