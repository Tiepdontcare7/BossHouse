import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className="p-2 mx-auto w-full max-w-screen-2xl fixed top-0 z-50 transition-all duration-700 ease-in-out bg-white border">
        <nav className="flex flex-row justify-around items-center relative">
          <a href="#" className="basis-2/6 text-left">
            <img className="w-[120px] border" src="/images/logo.png" alt="" />
          </a>
          <ul
            className="basis-3/6  flex items-center justify-end gap-8 uppercase text-sm text-black-600 font-bold -mr-32"
          >
            <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="/" className="">
                Trang chủ
              </a>
            </li>
            <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="#" className="">
                Giới thiệu
              </a>
            </li>
            <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="#" className="">
                Sản phẩm
              </a>
            </li>
            <li className="group py-1 transition delay-75 group-hover:text-[#f2b10b] after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="#" className="hover:text-[#f2b10b]">
                Menu Bee
              </a>
              {/* Mega Menu */}
              <ul className=" absolute hidden group-hover:block bg-[#ffffffa1] text-black right-0 border-[2px] border-[#f2b10b] rounded-2xl  group-hover:visible group-hover:mt-1 transition-all duration-500">
                <div className="grid grid-cols-4 ">
                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Best-Seller
                    </a>
                  </li>
                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Trà sữa
                    </a>
                  </li>
                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Coffee
                    </a>
                  </li>

                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Trà hoa quả đặc biệt
                    </a>
                  </li>
                  <li>
                    <a href="" className=" block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Olong
                    </a>
                  </li>
                  <li>
                    <a href="" className=" block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Sữa tươi
                    </a>
                  </li>

                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Trà trái cây
                    </a>
                  </li>
                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Món nóng
                    </a>
                  </li>
                  <li>
                    <a href="" className="  block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Đá xay
                    </a>
                  </li>

                  <li>
                    <a href="" className=" block p-2 hover:text-[#f2b10b] transition-all duration-150">
                      <i className="fa-solid fa-caret-right m-2"></i>
                      Món khác
                    </a>
                  </li>
                </div>
              </ul>
            </li>

            <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="#" className="">
                Tin tức
              </a>
            </li>
            <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
              <a href="#" className="">
                Liên hệ
              </a>
            </li>
          </ul>

          <ul className="basis-3/6 lg:basis-1/6 flex justify-end text-sm text-black font-medium">
            <li className="after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300;">
              <Link to="/cart" className="flex gap-2 items-center font-bold rounded-md p-2 px-4 bg-[#f2b10b]">
                <span className="underline">0 đ</span>
                <i className="fa-solid fa-bag-shopping text-center"></i>
              </Link>
            </li>
          </ul>

          <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
            <svg
              id="tqd-toggle-top-menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-7 h-7 inline-block;"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </nav>
      </header>
  );
};

export default Header;