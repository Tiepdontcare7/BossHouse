
const Categories = () => {
    return (
        <>
            <section className="my-[30px]">
                <div className=" lg:grid lg:grid-cols-2 md:flex flex-wrap gap-5 justify-center items-center">
                    <div className="video flex flex-wrap gap-5 justify-center items-center ">
                        {/* <img className=" w-[80%]" src="https://chomeocanh.com/wp-content/uploads/2023/05/do-cho-cho.jpg" alt="" />
                        <img className=" w-[80%] " src="https://chomeocanh.com/wp-content/uploads/2023/05/do-cho-cho.jpg" alt="" /> */}
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/31RzahshWCM?si=G0Tgvvya38ToGNyR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Mv6ScSEM-LA?si=vvkqGb2Pf1CillqP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="categories">


                        <div className="p-3">

                            <h1 className=" text-[#0000ff] text-2xl font-medium">Đồ cho chó giá rẻ? Shop bán đồ dùng cho chó gần đây?</h1>


                            <p className="">
                                <strong><span className="text-[100%] text-[#ff00ff]">Nhấp để chọn danh mục sản phẩm bạn muốn mua</span></strong>
                            </p>
                        </div>


                        <ul className="noidung-dactinh grid  md:grid-cols-2 gap-x-5 sm:grid-cols-1 text-sm px-2 py-1 leading-6 text-blue-500">
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-cho-cho/">Đồ cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/phu-kien-cho/">Phụ kiện cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-cho-cho-con/">Đồ cho chó con</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-cho-cho-poodle/">Đồ cho chó Poodle</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-dung-cho-cho-phoc-soc/">Đồ dùng cho chó Phốc sóc</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-dung-cho-cho-di-ve-sinh/">Đồ dùng cho chó đi vệ sinh</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/thuc-an-cho-cho/">Thức ăn cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/hat-cho-cho/">Hạt cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/pate-cho-cho/">Pate cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/xuong-cho-cho/">Xương cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/banh-thuong-cho-cho/">Bánh thưởng cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/snack-cho-cho/">Snack cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/sup-thuong-cho-cho/">Súp thưởng cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/sua-cho-cho-con/">Sữa cho chó con</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/sua-tam-cho-cho/">Sữa tắm cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/day-xich-cho/">Dây xích chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/ro-mom-cho/">Rọ mõm chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/vong-co-cho/">Vòng cổ chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/day-dat-cho/">Dây dắt chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/quan-ao-cho-cho/">Quần áo cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/ta-cho-cho/">Tã cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/mieng-lot-ve-sinh-cho-cho-meo/">Tấm lót cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/chuong-cho/">Chuồng chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/nha-cho-cho/">Nhà cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/long-cho/">Lồng chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/cui-cho-cho/">Cũi cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/do-choi-cho-cho/">Đồ chơi cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/binh-nuoc-cho-cho/">Bình nước cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/bat-an-cho-cho/">Bát ăn cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/balo-cho-cho/">Balo cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/nem-giuong-cho-cho/">Nệm cho chó</a></li>
                            <li className="border-b px-2 py-1"><a href="https://chomeocanh.com/nem-giuong-cho-cho/">Giường cho chó</a></li>
                        </ul>
                        <div className=" flex flex-wrap gap-4 py-4">
                            <div className=" p-4 object-cover bg-[#d69704] rounded-xl text-center "><a href="https://zalo.me/2174863095751901558" target="_self" className="button primary text-white font-medium text-xl  " >
                                <i className="icon-user" aria-hidden="true"></i>
                                <span>Chat Zalo với BossHouse</span>
                            </a></div>
                            <div className="p-4 object-cover bg-[#333356] rounded-xl text-center"><a href="tel:0965086079" target="_self" className="button secondary text-white font-medium text-xl  ">
                                <i className="icon-phone" aria-hidden="true"></i>  <span>Hotline: 0965.086.079</span>
                            </a></div>
                        </div>





                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories