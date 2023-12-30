import { useState } from "react";

const DetailSection = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    // const handleChange = (e: { target: { value: string; }; }) => {
    //     const value = parseInt(e.target.value, 10);
    //     if (!isNaN(value) && value >= 1) {
    //         setQuantity(value);
    //     }
    // }
    return (
        <section className="">
            <div className=" m-auto" >
                <div className="detail lg:grid grid-cols-2 md:flex gap-8 m-5 ">
                    <div className="image">
                        <div className="  flex items-center justify-center rounded-xl my-4 overflow-hidden">
                            <img className="object-cover w-[400px] h-[400px]  hover:scale-105 transition-transform ease-in-out duration-500"
                                src="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg" alt="" />
                        </div>
                        <div className="list-img flex justify-start w-[50%]  py-3 ">
                            <div className="img px-3 rounded-md">
                                <a href="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg">
                                    <img className="object-cover" alt="" src="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg" />
                                </a>
                            </div>
                            <div className="img px-3 rounded-md">
                                <a href="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg">
                                    <img className="object-cover w-full" alt="" src="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h1 className="name font-medium text-[25px] border-b py-[14px] leading-7 capitalize  ">váy phối màu classic</h1>
                        <div className="product-page-accordian">
                            <div className="accordion text-lg ">
                                <div id="accordion-reviews" className="accordion-item">
                                    <a id="accordion-reviews-label" className="accordion-title plain" aria-expanded="false" aria-controls="accordion-reviews-content" href="#accordion-item-reviews">
                                        <button className="toggle" aria-label="Toggle"><i className="icon-angle-down"></i></button>
                                        Đánh giá (0)
                                    </a>

                                </div>
                                <br />
                                <div className="price-wrapper text-xl  h-5">
                                    <span className="price">

                                        <span className="text-red-400 font-normal opacity-60 me-2 line-through">
                                            <bdi> 250,000<span>₫</span></bdi>
                                        </span>
                                        <span className="text-red-500 font-bold">
                                            <bdi>129,000<span>₫</span></bdi>
                                        </span>
                                    </span>
                                </div>
                                <br />
                                <div className="add-to-cart-container">

                                    <form className="cart flex flex-wrap " action="https://chomeocanh.com/vay-phoi-mau-claccsic/" method="post" >

                                        <div className="quantity me-4 h-full items-center whitespace-nowrap">
                                            <input type="button" onClick={handleDecrease} value="-" className="minus button border rounded-tl rounded-bl  overflow-hidden p-2 px-3 text-[#666] shadow bg-white" />
                                            <input type="text" className="border-y text-center max-w-[50px] overflow-hidden p-2 text-[#666] shadow bg-white" name="quantity" value={quantity}  aria-label="Product quantity" min="1" max="" step="1" inputMode="numeric" autoComplete="on" />
                                            <input type="button" onClick={handleIncrease} value="+" className="plus button  border rounded-tr rounded-br overflow-hidden p-2 px-3 text-[#666] shadow bg-white" />
                                        </div>
                                        <button type="submit" name="add-to-cart" className="hover:bg-[#2e3192] bg-blue-700  mb-4  p-2 rounded-md text-xl text-white max-[460px]:mt-4">Thêm vào giỏ hàng</button>
                                    </form>
                                </div>

                                {/* <div className=" flex flex-wrap gap-4 py-4">
                                    <div className=" p-4 object-cover bg-[#d69704] rounded-xl text-center "><a href="https://zalo.me/2174863095751901558" target="_self" className="button primary text-white font-medium text-xl  " >
                                        <i className="icon-user" aria-hidden="true"></i>
                                        <span>Chat với BossHouse</span>
                                    </a></div>
                                    <div className="p-4 object-cover bg-[#333356] rounded-xl text-center"><a href="tel:0965086079" target="_self" className="button secondary text-white font-medium text-xl  ">
                                        <i className="icon-phone" aria-hidden="true"></i>
                                        <span>Gọi Ngay </span>
                                    </a></div>
                                </div> */}
                                <div className=" mt-8 border-red flex flex-wrap justify-center">
                                    <div className=" bg-red-100 rounded">
                                        <div className="bg-[#f2f2f2] p-[15px] rounded mt-5">
                                            <p className="text-center font-bold">Tham khảo thêm</p>
                                        </div>
                                        <div className="row ">
                                            <div id="col-601298287" className="col">
                                                <div className="col-inner p-4 rounded">
                                                    <div className="">
                                                        <ul className=" flex flex-wrap gap-3 w-full">
                                                            <li><span className="text">Website: </span><a className="text-is-link font-thin" href="https://chomeocanh.com/" target="_blank" rel="noopener noreferrer">https://chomeocanh.com/</a></li>
                                                            <li><span className="text">Facebook: </span><a className="text-is-link font-thin" href="https://www.facebook.com/DogilyPetshop" target="_blank" rel="noopener noreferrer">https://www.facebook.com/DogilyPetshop</a></li>
                                                            <li><span className="text">Youtube: </span><a className="text-is-link font-thin" href="https://www.youtube.com/c/DogilyPetshop/" target="_blank" rel="noopener noreferrer">https://www.youtube.com/c/DogilyPetshop/</a></li>
                                                            <li><span className="text">Instagram: </span><a className="text-is-link font-thin" href="https://www.instagram.com/dogilypetshop/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/dogilypetshop/</a></li>
                                                            <li><span className="text">☎️ Điện thoại: </span><a className="text-is-phone-number font-thin" href="tel:0965086079">0965 086 079</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </section>
    )
}

export default DetailSection