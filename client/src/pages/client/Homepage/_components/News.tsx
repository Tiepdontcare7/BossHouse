
const News = () => {
    return (
        <div>
            <div className="bg-[#e6e9eb] h-auto  cursor-pointer xl:px-[80px] px-[20px] py-[64px]">
                <div className="text-center">
                    <h2 className="font-bold text-3xl mb-4 text-[#000]">TIN TỨC</h2>
                    <div>
                        <img className="block mx-auto" src="/images/ngoi-sao.png" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[15px] ">
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden">
                            <img src="/images/new-001.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-110 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">  Bộ luật chăn nuôi cấm đánh đạp, hành hạ chó mèo</h3>
                            <p className="mt-[10px] leading-5    text-[15px] font-normal"> Một cô mèo tên Lil Bub sở hữu hàng triệu lượt theo dõi trên các [...] </p>
                        </div>
                    </div>
                    {/* name1 */}
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden">
                            <img src="/images/new-002.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px] md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform hover:scale-110 duration-300 mx-auto object-cover cursor-pointer" />
                        </div>
                        <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">Sau 6 năm thất lạc, chú cún trở về trước lễ giáng sinh</h3>
                        <p className="mt-[10px] leading-5    text-[15px] font-normal">Gặp lại chú cún cưng của mình sau 6 năm bị thất lạc trước đêm [...]</p>
                    </div>
                    {/* name2 */}
                    <div className="text-center mt-[35px] ">
                        <div className="overflow-hidden ">
                            <img src="/images/new-003.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px] md:w-full  md:h-[490px] w-full h-[260px] hover:scale-110 transform transition-transform duration-300 mx-auto object-cover cursor-pointer" />
                        </div>
                        <h3 className=" font-bold  xl:text-[18px] text-[17px] mt-5">Cậu Vàng và tranh luận gay gắt chó ta hay chó Nhật?</h3>
                        <p className="mt-[10px] leading-5    text-[15px] font-normal">
                            Mới đây một bộ phim được phóng tác từ truyện ngắn Việt Nam nổi tiếng [...]</p>
                    </div>
                    {/* name 3 */}
                </div>
                {/* ione */}
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 md:grid-cols-4  mt-12 pb-[20px] gap-5">
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-blue-500 hover:border-solid ">
                        <div className=" ">
                            {/* <img src="/images/icon-01.png" alt="" className="xl:w-[90px] xl:h-[95px] xl:mt-[-2px] w-[80px] h-[80px]  " /> */}
                            <i className="fa-solid fa-house text-3xl  xl:w-[40px]  xl:mt-8 xl:ml-2 w-[40px] h-[70px] mt-4 ml-2 text-[blue] "></i>
                        </div>
                        <div className="mx-auto  w-full mt-2">
                            <p className="text-[16px] font-bold my-[5px]">Hoạt Động</p>
                            <p className="xl:text-[13px] text-[12px] font-normal mb-2">Với tiêu chí "Dog is family", BossHouse sẽ làm hết khả năng của mình với thú cưng của bạn  </p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-blue-500 hover:border-solid ">
                        <div className=" ">
                            {/* <img src="/images/icon-02.png" alt="" className="xl:w-[80px] xl:h-[75px] xl:mt-[8px] w-[40px] h-[70px] mt-4 ml-2  " /> */}
                            <i className="fa-solid fa-heart text-3xl  xl:w-[40px]  xl:mt-8 xl:ml-2 w-[40px] h-[70px] mt-4 ml-2 text-[blue]"></i>
                        </div>
                        <div className="mx-auto  w-full mt-2">
                            <p className="text-[16px] font-bold my-[5px]">Dịch Vụ</p>
                            <p className="xl:text-[13px] text-[12px] font-normal mb-2">Chúng tôi tự hào khi được chăm sóc và phục vụ những thú cưng của khách hàng</p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-blue-500 hover:border-solid ">
                        <div className=" ">
                            {/* <img src="/images/icon-03.png" alt="" className="xl:w-[80px] xl:h-[70px] xl:mt-[8px] w-[80px] h-[65px]  " /> */}
                            <i className="fa-solid fa-users text-3xl  xl:w-[40px]  xl:mt-8 xl:ml-2 w-[40px] h-[70px] mt-4 ml-2  text-[blue]"></i>
                        </div>
                        <div className="mx-auto w-full mt-2">
                            <p className="text-[16px] font-bold my-[5px]">Nhân viên</p>
                            <p className="xl:text-[13px] text-[12px] font-normal mb-2">Tiếp đãi chu đáo , nhiệt tình , tận tâm với công việc và yêu thích thú cưng  </p>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex gap-3 flex px-[10px]  bg-white md:flex rounded-[5px] overflow-hidden border-dashed border-2 border-blue-500 hover:border-solid ">
                        <div className=" ">
                            {/* <img src="/images/icon-04.png" alt="" className="xl:w-[80px] xl:h-[80px] xl:mt-[5px] w-[40px] h-[70px] mt-4 ml-2  " /> */}
                            <i className="fa-solid fa-thumbs-up text-3xl xl:ml-2 xl:w-[40px]  xl:mt-8 w-[40px] h-[70px] mt-4 ml-2 text-[blue]"></i>
                        </div>
                        <div className="mx-auto w-full mt-2">
                            <p className="text-[16px] font-bold my-[5px]">Sản Phẩm </p>
                            <p className="xl:text-[13px] text-[12px] font-normal mb-2">Đảm bảo chất lượng và uy tín , mang lại cho khách hàng sự trải nghiệm tốt nhất </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News