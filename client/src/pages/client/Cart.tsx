import { useState } from "react";
// import { useQuery } from '@tanstack/react-query';
import { FaTag } from "react-icons/fa";
const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    // const { data: isLoading, isError } = useQuery({
    //     queryKey: ["CARTS"],



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


        // <div className=" ">
        // <div className="mt-0 mb-[100px] w-full">

        // </div>



        <div className="">
            <div className="">



                <body>
                    <div className="h-screen bg-gray-100 pt-20">
                        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3">
                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                            <p className="mt-1 text-xs text-gray-700">36EU - 4Uđ</p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleDecrement} > - </span>
                                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" value={quantity} type="number" min="1" />
                                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleIncrement}> + </span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="text-sm">259.000 đ</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                            <p className="mt-1 text-xs text-gray-700">36EU - 4đ</p>
                                        </div>
                                        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 " onClick={handleDecrement}> - </span>
                                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" value={quantity} type="number" min="1" />
                                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleIncrement}> + </span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="text-sm">259.000 VND</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Subtotal</p>
                                    <p className="text-gray-700">$129.99</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Shipping</p>
                                    <p className="text-gray-700">$4.99</p>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                                        <p className="text-sm text-gray-700">including VAT</p>
                                    </div>
                                </div>
                                <div className="coupon pt-[10px]">
                                    <h3 className="widget-title mt-[10px] flex"><FaTag />
                                        Phiếu ưu đãi</h3>
                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Mã ưu đãi" />
                                    <input type="submit" className="is-form expand" name="apply_coupon" value="Áp dụng" />

                                </div>
                                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                            </div>
                        </div>
                    </div>
                </body>
                {/* <table classNameName="w-full border-collapse border ml-[50px]" >
                    <thead classNameName="border-b-2 mb-4  ">
                        <tr classNameName=''>
                            <th classNameName='w-[350px] flex text-sm'>SẢN PHẨM</th>
                            <th classNameName='w-[100px] text-sm'>GIÁ</th>
                            <th classNameName='w-[100px] text-sm'>SỐ LƯỢNG </th>
                            <th classNameName='w-[100px] text-sm'>TẠM TÍNH</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr classNameName=' my-[10px]  text-center border-b py-2' >
                            <div classNameName="flex mx-[10px]">
                                <div classNameName="my-[28px] mr-[10px] cursor-pointer border-2 w-8 h-8 rounded-[50%] pt-[2px]">
                                    <i classNameName="fa-solid fa-trash text-[#0000006d] " ></i>
                                </div>
                                <td classNameName="py-[15px]">
                                    <img src="" alt="" classNameName="w-[90px] h-[90px]" />
                                </td>
                                <td classNameName="my-[30px] ml-[20px] text-[#ad8444] text-base"></td>
                            </div>
                            <td classNameName=" font-semibold"></td>
                            <td classNameName="">
                                <div classNameName="flex mx-[5px]">
                                    <button classNameName="w-[50px] border h-[30px]  text-xl" onClick={handleIncrement}>
                                        +
                                    </button>
                                    <input type="text" className="border w-[50px] h-[30px]" value={quantity} readOnly />
                                    <button className="w-[50px] border h-[30px]  text-xl" onClick={handleDecrement}>
                                        -
                                    </button>
                                </div>
                            </td>
                            <td className=" font-semibold"></td>
                        </tr>

                    </tbody>
                    <div className="mt-[50px]">

                    </div>
                </table> */}


                {/* <div className="w-1/2 pl-4 lg:ml-[850px] lg:mt-[-190px] lg:w-[600px]">
                    <div className="cart-collaterals col pb-0 ">
                        <div className="cart_totals border-red-500 ">

                            <table cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="product-name uppercase flex h-[35px] pt-[3px] w-[600px] pr-[450px]" colSpan={2} style={{
                                            borderRight: "3px solid black", // Đường viền phía bên phải là màu đen
                                            borderTop: "3px solid black",  // Đường viền phía trên là màu đen
                                            borderLeft: "3px solid black",  // Đường viền phía dưới là màu đen
                                            borderBottom: "3px solid gray-200",
                                            borderWidth: "3px ",
                                        }}>Cộng giỏ hàng</th>
                                    </tr>
                                </thead>
                            </table>

                            

                            <table cellSpacing="0" className=" mt-[20px]">

                                <tbody className=" ">
                                    <tr className="cart-subtotal ">
                                    <th className="text-[15px]  pr-[540px] font-normal "  >Tạm tính</th>
                                    <td className="pr-[130px]" data-title="Tạm tính"><span className="  "><bdi>150,000&nbsp;<span className="">₫</span></bdi></span></td>
                                </tr>
                                      <hr className="w-[600px]"></hr>
                                    <tr className=" mt-[10px] ">
                                        <th className=" pr-[560px] font-normal">Tổng</th>
                                        <td data-title="Tổng"><strong><span className="woocommerce-Price-amount amount"><bdi>150,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></bdi></span></strong> </td>
                                    </tr>


                                </tbody></table>

                            <div className="wc-proceed-to-checkout">

                                <a href="" className="checkout-button button alt wc-forward">
                                    Tiến hành thanh toán</a>
                            </div>


                        </div>
                        <form className="checkout_coupon mb-0" method="post" />
                        <div className="coupon">
                            <h3 className="widget-title"><i className="icon-tag"></i> Phiếu ưu đãi</h3>
                            <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Mã ưu đãi" />
                            <input type="submit" className="is-form expand" name="apply_coupon" value="Áp dụng" />

                        </div>

                        <div className="cart-sidebar-content relative"></div>
                    </div>

                </div> */}




                <div />
            </div>
        </div>

    );

}


export default Cart;
