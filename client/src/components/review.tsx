

const Review = () => {
    return (
        <div className="w-[100%] ">
            <div className="pt-[64px]">
                <div className="">
                    <h3 className="text-center text-[#f2b10b] text-4xl mb-4  uppercase font-bold mx-[5px]">KHÁCH HÀNG NÓI VỀ BEE </h3>
                    <img src="/images/ngoi-sao.png" alt="" className="mx-auto  uppercase font-bold h-[15px]" />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[50px] mx-[50px] ">
                    <div className="text-center ">
                        <img src="/images/review-001.jpg" alt="" className=" rounded-full xl:w-[250px] xl:h-[250px] lg:w-[240px] lg:h-[240px] md:w-[230px] md:h-[230px] w-[220px] h-[220px] object-cover mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className=" font-bold italic text-[20px]">TRẦN NHƯ QUỲNH</h3>
                        <p className="mt-[10px] leading-5  xl:font-normal text-gray-600 xl:text-[16px]   text-[14px] font-normal">Trà Sữa của BeeteaCoffee đa dạng và thú vị. Hương vị độc đáo, kết hợp tinh tế và chất lượng phục vụ chuyên nghiệp, tạo nên trải nghiệm tuyệt vời cho khách hàng…</p>
                    </div>
                    {/* name1 */}
                    <div className="text-center my-[50px] md:mt-0 xl:mt-0">
                        <img src="/images/review-003.webp" alt="" className="rounded-full xl:w-[250px] xl:h-[250px] lg:w-[240px] lg:h-[240px] md:w-[230px] md:h-[230px]  w-[220px] h-[220px] object-cover mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className=" font-bold italic text-[20px]">NGUYỄN TRUNG HẢI</h3>
                        <p className="mt-[10px] leading-5  xl:font-normal xl:text-[17px] text-gray-600 text-[14px] font-normal">Đồ uống của BeeteaCoffee đa dạng và phong phú. Hương vị độc đáo, chất lượng tuyệt vời, và tạo cảm giác sảng khoái. Dịch vụ tận tâm và hiệu quả, tạo nên trải nghiệm thú vị cho khách hàng…</p>
                    </div>
                    {/* name2 */}
                    <div className="text-center">
                        <img src="/images/review-002.jpg" alt="" className="rounded-full xl:w-[250px] xl:h-[250px] lg:w-[240px] lg:h-[240px] md:w-[230px] md:h-[230px]  w-[220px] h-[220px] object-cover mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className=" font-bold italic text-[20px]">TRẦN THỊ QUỲNH ANH </h3>
                        <p className="mt-[10px] leading-5  xl:font-normal xl:text-[17px] text-gray-600 text-[14px] font-normal">Đồ uống của BeeteaCoffee độc đáo, thú vị và tinh tế. Hương vị tuyệt hảo, chất lượng nguyên liệu cao cấp, và dịch vụ chuyên nghiệp tạo nên trải nghiệm đáng nhớ…</p>
                    </div>
                    {/* name 3 */}
                </div>
            </div>

            {/* new  */}

        </div>
    )
}
export default Review