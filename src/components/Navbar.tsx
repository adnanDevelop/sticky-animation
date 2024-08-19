const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-[#e0e0e0] shadow flex items-center justify-between px-[40px]">
      <h2 className="text-black font-medium text-lg">Navbar</h2>
      <div className="flex items-center gap-x-4">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="" className="custom-btn">
          Get Demo
        </a>
        <a href="" className="custom-btn">
          +92-323083883-5
        </a>
        <a href="" className="custom-btn">
          EN
        </a>
      </div>
    </div>
  );
};

export default Navbar;
