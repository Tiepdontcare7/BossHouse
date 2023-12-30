
const News = () => {
    return (
        <div>
            <div className="bg-[#e6e9eb] h-auto mt-[50px] cursor-pointer xl:px-[80px] px-[20px] py-[64px]">
                <div className="">
                    <h3 className="text-center text-[#f2b10b] text-4xl  uppercase font-bold mb-4">TIN TỨC</h3>
                    <img src="/images/ngoi-sao.png" alt="" className="mx-auto text-[35px] uppercase font-bold h-[15px] " />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[15px] ">
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden">
                            <img src="/images/new-001.png" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-110 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">  BEE RA MẮT “TOPPING MỚI” SIÊU HOT - ... </h3>
                            <p className="mt-[10px] leading-5    text-[15px] font-normal"> Tặng THẠCH MIỄN PHÍ Khi order 3 nhóm trà - nước nhà Bee! Chào cả nhà, cũng đã lâu rồi [...] </p>
                        </div>
                    </div>
                    {/* name1 */}
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden">
                            <img src="/images/new-002.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px] md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform hover:scale-110 duration-300 mx-auto object-cover cursor-pointer" />
                        </div>
                        <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">VÌ SAO NÊN ĐẦU TƯ THIẾT KẾ QUÁN CÀ PHÊ?</h3>
                        <p className="mt-[10px] leading-5    text-[15px] font-normal">Một bài viết tìm hiểu vì sao đầu tư thiết kế quán cà phê là một quyết định quan trọng [...]</p>
                    </div>
                    {/* name2 */}
                    <div className="text-center mt-[35px] ">
                        <div className="overflow-hidden ">
                            <img src="/images/new-003.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px] md:w-full  md:h-[490px] w-full h-[260px] hover:scale-110 transform transition-transform duration-300 mx-auto object-cover cursor-pointer" />
                        </div>
                        <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">Bee Coffee & Tea – Không chỉ đơn thuần làm ...</h3>
                        <p className="mt-[10px] leading-5    text-[15px] font-normal">Không đơn thuần chỉ là một chuỗi cà phê phục vụ thức uống chất lượng, thơm ngon, đi đôi với [...]</p>
                    </div>
                    {/* name 3 */}
                </div>
{/* ione */}
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 md:grid-cols-4  mt-12 pb-[20px] gap-5">
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid ">
                        <div className=" ">
                            <img src="/images/icon-01.png" alt="" className="xl:w-[90px] xl:h-[95px] xl:mt-[-2px] w-[80px] h-[80px]  " />
                        </div>
                        <div className="mx-auto  w-full">
                            <p className="text-[18px] font-bold my-[5px]">Tình yêu với Bee</p>
                            <p className="xl:text-[14px] text-[12px] font-normal mb-2">Bee milk tea & coffee tạo nên những sản phẩm tuyệt vời hương vị khó quên và một trải nghiệm đáng nhớ</p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid ">
                        <div className=" ">
                            <img src="/images/icon-02.png" alt="" className="xl:w-[80px] xl:h-[75px] xl:mt-[8px] w-[80px] h-[70px]  " />
                        </div>
                        <div className="mx-auto  w-full">
                            <p className="text-[18px] font-bold my-[5px]">Sản phẩm</p>
                            <p className="xl:text-[14px] text-[12px] font-normal mb-2">Chúng tôi tự hào đó chính là chất lượng hương vị đặc biệt của mỗi ly nước mà chúng tôi làm ra</p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid ">
                        <div className=" ">
                            <img src="/images/icon-03.png" alt="" className="xl:w-[80px] xl:h-[70px] xl:mt-[8px] w-[80px] h-[65px]  " />
                        </div>
                        <div className="mx-auto  w-full">
                            <p className="text-[18px] font-bold my-[5px]">Nguyên liệu</p>
                            <p className="xl:text-[14px] text-[12px] font-normal mb-2">Sử dụng những nguyên liệu sạch có nguồn gốc xuất xứ rõ hàng tự hào nông sản Việt</p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid ">
                        <div className=" ">
                            <img src="/images/icon-04.png" alt="" className="xl:w-[80px] xl:h-[80px] xl:mt-[5px] w-[80px] h-[70px]  " />
                        </div>
                        <div className="mx-auto  w-full">
                            <p className="text-[18px] font-bold my-[5px]">Giao hàng</p>
                            <p className="xl:text-[14px] text-[12px] font-normal mb-2">Giao hành nhanh chóng qua các App trực tuyến , Fanpage và số Hotline của cửa hàng 0366292585</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News