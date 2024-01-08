import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Header = () => {
    const btnMobile = useRef(null)

    const onClick = () => {
        btnMobile.current.classList.toggle('hidden')
    }
    const megaE = useRef<HTMLDivElement | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSearch, setShowSearch] = useState(false);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    // const handleMobileMenuToggle = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollY > lastScrollY && scrollY > 100) {
            megaE.current?.classList?.add('hidden');
        } else if (scrollY < lastScrollY) {
            megaE.current?.classList?.remove('hidden');
        }
        setLastScrollY(scrollY);
    }, [scrollY, lastScrollY]);

    return (
        <header
            ref={megaE}
            className=" w-full max-w-screen-2xl fixed top-0 z-50 transition-all duration-700  ease-in-out bg-white"
        >
            <nav className="bg-white border-gray-200 dark:bg-gray-900  ">
                <div ref={megaE} className={' xl:flex md:block hidden justify-between px-2 w-full h-[50px] bg-[#2e2f31e5] '}>
                    <ul className="flex xl:block md:hidden xl:my-4 ">
                        <div className="flex justify-center gap-3 text-white ml-3">
                            <li className="group flex ">
                                <Link to="" className="flex items-center gap-2 uppercase font-normal text-sm hover:text-white">
                                    <i className="fa-solid fa-location-dot"></i>Location
                                </Link>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3 rounded-md z-20 transition-all duration-500 left-0 top-12">
                                    <div className="absolute -translate-y-5 translate-x-12 ">
                                        <i className="fa-solid fa-caret-down fa-rotate-180 text-black"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <Link to="">233 Phúc Diễn - Bắc Từ Liêm - Hà Nội</Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="group flex">
                                <Link
                                    to=""
                                    className="flex justify-items-center items-center gap-2 uppercase font-normal text-sm hover:text-white"
                                >
                                    <i className="fa-regular fa-envelope"></i>Email
                                </Link>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3  text-white rounded-md z-20 left-13 top-12">
                                    <div className="absolute -translate-y-5 translate-x-6 ">
                                        <i className="fa-solid fa-caret-down fa-rotate-180 text-black"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <Link to="">BossHouse@gmail.com</Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="group flex">
                                <Link to="" className="flex items-center gap-2 uppercase font-normal text-sm hover:text-white">
                                    <i className="fa-solid fa-phone"></i>0366.292.585
                                </Link>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3  text-white rounded-md z-20 left-13 top-12">
                                    <div className="absolute -translate-y-5 translate-x-6 text-black">
                                        <i className="fa-solid fa-caret-down fa-rotate-180"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <Link to="">0366.292.585</Link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </div>
                    </ul>

                    <div className="text-white px-1 text-sm flex  w-7/12 xl:block xl:my-4 md:my-0 md:hidden">
                        <Marquee speed={50} gradient={false} pauseOnHover={true}>
                            <Marquee pauseOnHover={true}>
                                Quán Cà Phê, Trà SữLink to- thỏLink tovị giác, tạo không gian ấm áp, mang lại trải nghiệm
                                thư giãn và độc đáo. Bee là điểm đến lý tưởng cho mọi người.
                            </Marquee>
                        </Marquee>
                    </div>
                    <div
                        className="relative xl:flex md:block hidden flex-row-reverse gap-2 justify-center items-center pr-6 "
                        style={{ transition: 'all 0.3s', animation: 'fadeIn 0.5s' }}
                    >
                        <button className="ml-2 ">
                            <Link to="/cart" className="bg-[white] p-[7px] px-[10px] rounded-md mr-2 cursor-pointer xl:block md:block hidden  ">
                                <i className="fa-solid fa-cart-shopping text-base"></i>
                            </Link>
                        </button>
                        <Link to="#" className="bg-[white] xl:block md:hidden p-[6px] px-[10px] rounded-md mr-2 cursor-pointer " onClick={() => setShowSearch(!showSearch)}>
                            <i className="fa-solid fa-magnifying-glass text-base"></i>
                        </Link>
                        {showSearch && (
                            <div
                                className="right-0 bg-white rounded-md shadow-md "
                                style={{ transition: 'all 0.8s', animation: 'fadeIn 0.5s' }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 h-9  rounded-md px-1"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto xl:mt-0 md:mt-2 md:mx-2  mt-2 xl:p-1 ">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="h-[70px] " src="/images/logo.png" alt="" />
                    </Link>
                    <div className="flex items-center md:order-2 space-x-0 md:space-x-2 rtl:space-x-reverse">
                        <Link to="/signin" className="xl:text-gray-900 dark:text-white xl:bg-white xl:hover:bg-gray-50 focus:ring-4 xl:ring-gray-300 font-medium rounded-lg xl:text-sm text-xs px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 md:bg-blue-700 md:text-white xl:mt-0 md:mt-2  ">Đăng Nhập</Link>
                        <Link to="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg xl:text-sm text-xs px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 xl:block md:hidden ">Đăng Ký</Link>
                        <button onClick={onClick} data-collapse-toggle="mega-menu-icons" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div ref={btnMobile} id="mega-menu-icons" className=" items-center justify-between hidden w-full  md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-2 font-medium md:flex-row md:mt-0 xl:space-x-8 md:space-x-3 rtl:space-x-reverse ">
                            <li>
                                <Link to="/" className="font-bold  xl:text-sm md:text-xs block py-2 px-3 hover:text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"> TRANG CHỦ</Link>
                            </li>
                            <li className="group ">
                                <Link to="/catshop">
                                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className=" font-bold xl:text-sm md:text-xs flex items-center justify-between w-full py-2 px-3   hover:text-blue-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                        SẢN PHẨM
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button></Link>
                                <div id="mega-menu-icons-dropdown" className="absolute z-10 group-hover:grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 md:pb-4 dark:text-white">
                                        <ul className="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Thức ăn cho chó
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Thức ăn cho mèo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Cát vệ sinh
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Súp thưởng
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 pb-0 md:pb-4 dark:text-white">
                                        <ul className="space-y-4">
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Chuồng chó , mèo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Cào móng
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Quần áo
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Sữa tắm - Dẩu gội
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 dark:text-white">
                                        <ul className="space-y-4">
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Pate
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Balo
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Đồ chơi
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="group ">
                                <Link to="/dogshop">
                                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className=" font-bold xl:text-sm md:text-xs flex items-center justify-between w-full py-2 px-3   hover:text-blue-600 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                        DỊCH VỤ
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button></Link>
                                <div id="mega-menu-icons-dropdown" className="absolute z-10 group-hover:grid hidden w-auto grid-cols-3 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                    <div className="p-4 pb-0 md:pb-4 dark:text-white">
                                        <ul className="space-y-4 " aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Tắm gội
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Spa
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 pb-0 md:pb-4 dark:text-white">
                                        <ul className="space-y-4">
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Uốn tạo kiểu
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">

                                                    Nhuộm
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 pb-0 md:pb-4 dark:text-white">
                                        <ul className="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Cắt móng
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="flex items-center  dark:text-gray-400 hover:bg-blue-600 hover:text-white h-8 hover:rounded-[50px] px-3 dark:hover:text-blue-500 group">
                                                    Cắt tỉa
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/blog" className="font-bold xl:text-sm md:text-xs block py-2 px-3  hover:text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> TIN TỨC</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="font-bold xl:text-sm md:text-xs block py-2 px-3  hover:text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> LIÊN HỆ</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="font-bold xl:text-sm md:text-xs xl:hidden md:hidden block py-2 px-3  hover:text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> <i className="fa-solid fa-cart-shopping text-base"></i></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header