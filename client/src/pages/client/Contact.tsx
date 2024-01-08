
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const ContactPage = () => {
    return <div>
        <div className="flex mt-[60px]">
            <h1 className="lg:text-[40px] text-xl font-bold text-[#000] lg:ml-[180px] md:ml-[50px] md:text-[25px] ml-[10px] ">BossHouse hân hạnh được hỗ trợ quý khách!</h1>
            {/* <div className="mt-[-15px]"><img src="../../../public/images/blog-1.png" alt="" className="w-[120px] h-[100px]" /></div> */}
        </div>
        <div className="mt-[5px]">
            <div className="lg:w-[380px] lg:ml-[200px] lg:mt-[50px] md:ml-[20px] md:w-[400px] ml-[10px]">
                <p className="xl:text-[20px] text-base leading-6 text-gray-500 ml-[10px]">Vui lòng nhập thông tin để được hỗ trợ.</p>
            </div>
            <div>

                <form className="max-w-md lg:ml-[200px] lg:mt-10 md:ml-[20px] md:mt-[20px] ml-[20px] pt-[10px]">
                    <div className="mb-4">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            id="large-input"
                            className="block lg:w-full md:w-[330px] w-[450px]  p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Địa chỉ email
                        </label>
                        <input
                            type="text"
                            id="base-input"
                            className="block lg:w-full md:w-[330px]  w-[450px] p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            className="block lg:w-full md:w-[330px]  w-[450px] p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nội dung
                        </label>
                        <textarea
                            id="message-input"
                            className="block lg:w-full md:w-[330px] p-3  w-[450px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs h-40 resize-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="text-[#5b6f4a] lg:text-[16px] md:ml-[0] sm:ml-[20px]">Quý khách vui lòng mô tả chi tiết</div>
                    <button className="rounded-md  mt-[5px] group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-white text-purple-500  transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                        <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Submit</span>
                    </button>
                </form>
                <div className="lg:ml-[200px] text-[15px] w-[400px] mt-[50px] text-[#5b6f4a] md:ml-[10px] ml-[20px]">
                    Cảm ơn quý khách đã đóng góp ý kiến với chúng tôi. Mọi ý kiến đóng góp xin được ghi nhận và sửa đổi!
                </div>
            </div>


        </div>
        <div className='lg:ml-[700px] lg:mt-[-780px] lg:flex flex-wrap md:ml-[400px] md:mr-[20px] md:mt-[-730px] '>
            <h3 className="text-[25px] sm:ml-[20px] sm:pt-[20px] md:mt-[10px] ml-[40px] mt-[40px]">CÙNG THẮC MẮC NHANH</h3>
            <hr className="bg-gray-500 border-1"></hr>
            <div className="space-y-4">
                <details className="lg:ml-[-310px] lg:mt-[100px] md:mt-[40px] mt-[30px] w-[500px] group [&_summary::-webkit-details-marker]:hidden" open>
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className=" mt-[5px] font-medium">Cam kết sản phẩm tươi ngon như thế nào?</h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="  ml-[8px]  leading-relaxed text-gray-700">
                    Sản phẩm được sản xuất từ nguồn nguyên liệu tươi, máy móc trang thiết bị hiện đại, tủ cấp đông cấp tốc, đóng gói bằng quy trình xử lý chân không đảm bảo an toàn tuyệt đối và tính tươi ngon của sản phẩm.
                    </p>
                </details>

                <details className=" lg:ml-[-310px] lg:mt-[100px] w-[500px] group [&_summary::-webkit-details-marker]:hidden" open>
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className=" mt-[5px] font-medium">Thời gian giao hàng của bạn trong bao lâu</h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="  ml-[8px]  leading-relaxed text-gray-700">
                    Chúng tôi sẽ tư vấn về sản phẩm, quy trình, cách thức bảo quản online đến khách hàng. Sau khi xác định hợp tác chính thức sẽ khảo sát và cung cấp sản phẩm cũng như hỗ trợ thiết bị bảo quản sản phẩm, ấn phẩm thương hiệu để khẳng định sản phẩm chính hãng The Boss.
                    </p>
                </details>

                <details className=" lg:ml-[-310px] lg:mt-[100px] w-[500px] group [&_summary::-webkit-details-marker]:hidden" open>
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className=" mt-[5px] font-medium">Chính sách thanh toán như thế nào?</h2>

                        <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className=" ml-[8px] leading-relaxed text-gray-700">
                    Chúng tôi đa dạng hình thức thanh toán theo trực tiếp, chuyển khoản, Visa – Master Card, ký gửi,..tuỳ theo nhu cầu và hình thức của Shop/Khách hàng.                    </p>
                </details>


                
            </div>


        </div>



        <div className="bando lg:mt-[700px] lg:ml-[-110px] lg:mb-[100px] md:mt-[900px] md:ml-[-790px] md:mb-[50px] mt-[700px] ml-[-800px] mb-[10px]">
            <div className="ml-[800px] mt-[-650px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.883946847499!2d105.75591137500058!3d21.037329087484693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134549562f27c71%3A0x3ac6eca395ce63b1!2zMjMzIFBow7pjIERp4buFbiwgWHXDom4gUGjGsMahbmcsIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701144352919!5m2!1svi!2s" width="650" height="200" className="w-[470px] ml-[5px] md:w-full lg:w-[500px]"></iframe>
            </div>
            <div className="ml-[800px] mt-[20px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.9030370229757!2d105.69300367503283!3d21.07653458058476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d193768dc1%3A0xfd2e9ac6b101245!2zUC4gVGjDuiBZLCDEkOG7qWMgVGjGsOG7o25nLCBIb8OgaSDEkOG7qWMsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704541553076!5m2!1svi!2s"  width="650" height="200" className="w-[470px] ml-[5px] md:w-full lg:w-[500px]" ></iframe>   
             </div>
           
        </div>    {/* end ban do*/}


    </div>;
};

export default ContactPage;
