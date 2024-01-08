
const Address = () => {
    return (

        <div className="row w-[100vw] relative mb-10">


            <div className="col">
                <div className="flex  border-b-[#fcb000] border-b-2 uppercase justify-center items-center" >
                    <a className="bg-[#fcb000] flex flex-col text-white px-5 pt-3 pb-1 rounded-t-xl" >
                        <span>Địa chỉ</span>
                    </a>
                </div>
                <div className="tab-panels flex-grow">
                    <div className=" p-4">

                        <p className="text-justify">
                            <span className="font-medium text-[#ff00ff]">Cửa hàng mua đồ chó gần đây. Shop bán đồ dùng cho chó giá rẻ?</span>
                        </p>
                        <div className="text-justify  font-thin text-base ">
                            <ul className="  ml-2">
                                <li className="list-disc"><a href="https://goo.gl/maps/gn1onZF1NpjkrJ8c6">606/121 đường 3 tháng 2, phường 14, quận 10, thành phố Hồ Chí Minh</a>. (Hẻm Xe Hơi lớn đỗ cửa).</li>
                                <li className="list-disc"><a href="https://goo.gl/maps/pyiwAUo5RefzY23z8">Số 81-95, đường Nghi Tàm, phường Yên Phụ, quận Tây Hồ, Tp Hà Nội</a>.</li>
                            </ul>
                            <p className="">
                                <span dir="auto">Điện thoại: <a href="tel:0123456789">0123 456 789</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="">

                <iframe className='w-full ' src="https://www.youtube.com/embed/5WNo-P0etqg?si=-ViF6BhBUXV2SRpL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> */}



        </div>

    )
}

export default Address