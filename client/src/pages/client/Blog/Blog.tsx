


const Blog = () => {
    return (
            <div className=" h-auto   xl:px-[80px] px-[10px] py-[64px]">
                {/* <div className="text-center">
                <h2 className="font-bold text-3xl mb-4 text-[#f2b10b]">TIN TỨC</h2>
                <div>
                    <img className="block mx-auto" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div> */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[15px] ">
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/blog-1.png" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]"> Chó có nên ăn chay hay không ?</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal "> By author-avatar Theboss

                                Hãy dừng ngay lại việc cho chó mèo ăn chay hoặc rau củ quả với hàm lượng lớn trong một thời gian dài. Tại sao bạn phải cho chó mèo ăn t... </p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name1 */}
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/blog-2.png" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]"> Có nên cho chó ăn thức ăn tự nhiên?</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal "> Có một sự thật chính là rất nhiều những chú chó có thể phát triển khỏe mạnh khi ăn theo chế độ ăn tự nhiên. Chỉ có rất ít trường hợp nh...</p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name2 */}
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/blog-3.png" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]"> Chó con nên ăn gì? Khẩu phần ăn ra sao?</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal "> Cho chó ăn gì để mập là điều mà bất kỳ ai đã và đang nuôi cún cũng quan tâm bởi chú cún gầy và ốm không chỉ xấu về ngoại hình mà đây cò... </p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name3 */}
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/new-001.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]">Bộ luật chăn nuôi cấm đánh đạp, hành hạ chó mèo</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal ">Luật chăn nuôi 2018 được ban hành ngày 19/11/2018 và sẽ bắt đầu có hiệu lực vào ngày 01/01/2020. Theo đó, Bộ luật này quy định về các hoạt động chăn nuôi... </p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name4 */}
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/new-002.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]">Sau 6 năm thất lạc, chú cún trở về trước lễ giáng sinh</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal ">Một chú chó giống Springer Spaniel tên Houston sinh sống tại Bỉ bị lạc hồi 6 năm trước vừa về đoàn tụ với chủ nhân trước đêm Giáng sinh.....</p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name5 */}
                    <div className="text-center mt-[35px] hover:shadow-xl border pb-3 ">
                        <div className="overflow-hidden">
                            <img src="/images/new-003.jpg" alt="" className=" xl:w-full xl:h-[230px] lg:w-[280px] lg:h-[280px]  md:w-full  md:h-[490px] w-full h-[260px] transform transition-transform duration-300 hover:scale-105 mx-auto object-cover cursor-pointer" />
                        </div>
                        <div className="px-[10px]">
                            <h3 className=" font-medium  xl:text-2xl text-[20px] mt-3 text-[#000000a2]"> Cậu Vàng và tranh luận gay gắt chó ta hay chó Nhật?</h3>
                            <div className="meta-author   xl:text-[17px] xl:block lg:hidden md:hidden hidden text-base xl:mx-[110px]  lg:ml-[70px] md:ml-[280px] mx-[110px] my-[10px] ">
                                <div className="flex">
                                    <span className="mr-[10px]  font-medium "> By </span>
                                    <img
                                        alt="author-avatar"
                                        src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        data-wood-src="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=32&amp;d=mm&amp;r=g"
                                        srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        data-srcSet="https://secure.gravatar.com/avatar/06af3483b25dc5a7eb10410a88f04a4c?s=64&amp;d=mm&amp;r=g 2x"
                                        className="wd-lazy-load woodmart-lazy-load wd-lazy-fade avatar avatar-32 photo wd-loaded rounded-full mr-[10px]"
                                        height="24"
                                        width="24"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="vcard author author_name">
                                        <span className="hover:text-[#000]  font-medium cursor-pointer">Theboss</span>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-[10px] leading-5 m xl:text-[15px] text-sm font-normal "> Mới đây một bộ phim được phóng tác từ truyện ngắn Việt Nam nổi tiếng “Lão Hạc” đã thu hút được nhiều sự quan tâm của quý khán giả. Bên cạnh đó ... </p>


                            <a href=""><button className="text-[rgb(167,34,35)]  text-[14px] xl:text-base  font-bold mt-4">XEM THÊM</button></a>
                        </div>
                    </div>
                    {/* name6 */}

                </div>
            </div>
    )
}

export default Blog