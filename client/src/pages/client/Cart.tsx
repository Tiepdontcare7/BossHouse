import { useState } from "react";
// import { useQuery } from '@tanstack/react-query';
import { FaTag } from "react-icons/fa";
const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    // // const { data: isLoading, isError } = useQuery({
    // //     queryKey: ["CARTS"],



    // });
    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error...</div>;
    return (

        <div className="h-auto  pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold text-[#000]">Giỏ Hàng</h1>
            <div className="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
                <div className="">
                    <nav className="text-xs font-semibold uppercase text-gray-400">
                        <ul className=" flex border-b pb-2">
                            <li className=""> <input type="checkbox" className="xl:h-4 xl:w-4 " value="id-1" /></li>
                            <li className="text-left font-bold text-[#000] xl:ml-3 ml-2  xl:text-base xl:w-[300px]  md:w-[100px] w-[500px]">
                                Sản Phẩm
                            </li>
                            <li className="text-left font-bold text-[#000] xl:text-base xl:w-[150px] xl:block hidden">
                                Đơn Giá
                            </li>
                            <li className="xl:text-left xl:ml-0 font-bold text-[#000] xl:text-base xl:w-[150px] lg:w-[100px] lg:ml-[280px] md:w-[100px] md:ml-[280px] w-[300px] ml-[130px] ">
                                Số Lượng
                            </li>
                            <li className="text-left font-bold text-[#000] xl:text-base xl:w-[150px] xl:block hidden">
                                Số Tiền
                            </li>
                            <li className="text-left font-bold text-[#000] xl:text-base xl:w-[100px] xl:block hidden ">
                                Action
                            </li>
                        </ul>
                    </nav>

                    <div className="divide-y divide-gray-100 text-sm">
                        <div className=" flex  py-2 ">
                            <div className="py-4 ">
                                <input type="checkbox" className="xl:h-4 xl:w-4" value="id-1" />
                            </div>
                            <div className="font-medium text-gray-800 flex xl:ml-3 ml-2 xl:w-[300px]  w-full">
                                <img src="/images/img_v2.png" alt="" className="xl:w-[70px] xl:h-[70px] w-[60px] h-[60px]" />
                                <span className="pl-2 xl:mt-6 w-[230px] xl:h-0 h-[50px] mt-3 ">
                                    Samsung Galaxy Note 4
                                </span>
                            </div>
                            <div className="xl:w-[150px] xl:py-5 py-8 w-[50px] ml-[-160px] xl:ml-0 lg:ml-[-280px] md:ml-[-280px]">
                                <div className="text-green-500 font-medium xl:w-[100px] w-[100px] ">150.000 vnd</div>
                            </div>
                            <div className="flex item border-gray-100 w-[150px] xl:py-4 xl:ml-0  ml-28 lg:ml-60  md:ml-60 ">
                                <span className="xl:h-8 xl:w-8 w-5 h-5 cursor-pointer  rounded-l bg-[#f9f9f9] xl:py-1 xl:px-3 text-center duration-100 hover:bg-[#00000021] hover:text-[#000] border" onClick={handleDecrement}> - </span>
                                <input className="xl:h-8 xl:w-8 w-5 h-5  bg-white  text-xs outline-none text-center border" value={quantity} min="1" />
                                <span className="xl:h-8 xl:w-8 w-5 h-5 cursor-pointer rounded-r bg-[#f9f9f9] xl:py-1 xl:px-3 text-center duration-100 hover:bg-[#0000001f] hover:text-[#000] border" onClick={handleIncrement}> + </span>
                            </div>
                            <div className="w-[150px] py-4 ">
                                <div className=" font-medium text-green-500 xl:block hidden">150.000 vnd</div>
                            </div>
                            <button className=" xl:ml-[-20px]  ml-[-200px] md:py-3 lg:py-3 py-4  flex justify-center w-[100px] ">
                                <svg className="xl:h-8 xl:w-8 w-7 h-7 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>


                 
                    </div>
                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-[#000] font-medium">Giá Tiền</p>
                        <p className="text-[#000] ">$129.99</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[#000] font-medium">Số Lượng</p>
                        <p className="text-[#000]">4</p>
                    </div>
                    <div className="coupon pt-[10px]">
                        <h3 className="widget-title mt-[10px] flex"><FaTag />
                            <span className="ml-2 text-[#000] font-medium"> Phiếu ưu đãi</span></h3>
                        <input type="text" name="coupon_code" className="h-8 border mt-2 pl-1 w-full text-[#000] font-medium" id="coupon_code" placeholder="Mã ưu đãi" />
                        <input type="submit" name="coupon_code" className="h-8 border mt-2 pl-1 w-full hover:text-[#000] hover:bg-[#00000018] hover:font-medium" id="coupon_code" value="Áp dụng" />

                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-[#000]">Thành Tiền</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold text-[#000]">$134.98 USD</p>
                            <p className="text-sm text-[#000]">( Bao gồm VAT )</p>
                        </div>
                    </div>

                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Thanh Toán</button>
                </div>
            </div>
        </div>
    );

}


export default Cart;