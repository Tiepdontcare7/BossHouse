const Checkout = () => {

    return (
        <>
            <div className="grid grid-cols-2  w-full mx-28 mt-10">
                <div className="  px-10 ">
                    <div>
                            <h3 className="text-xl font-bold">Thông tin người nhận hàng</h3>
                            <div className="col-span-6">
                        <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Số điện thoại"
                                    className="mt-1 w-[97%] rounded-md px-2 py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                                </div>
                    </div>
                    {/* sdt */}
                   
                    <div className="max-w-xl mt-4 mb-48">
                        <h3 className="text-xl font-bold">Địa chỉ thanh toán</h3>
                        <form action="#" className="mt-2 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    placeholder="Họ và tên"
                                    className="mt-1 w-full rounded-md px-2 py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    placeholder="Email"
                                    className="mt-1 w-full rounded-md px-2 py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="text"
                                    id=""
                                    name=""
                                    placeholder="Địa chỉ (số nhà, tên đường, Phường/xã, Quận/Huyện, Thành Phố)"
                                    className="mt-1 w-full rounded-md px-2 py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <input
                                    type="text"
                                    id=""
                                    name=""
                                    placeholder="Lời nhắn ..."
                                    className="mt-1 w-full rounded-md px-2 py-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <button className="bg-[#2f2fbe] text-white px-4 py-3 font-medium text-base hover:bg-[blue]">Hoàn tất đơn hàng</button>
                            </div>
                        </form>
                    </div>
                    {/*  */}

                    {/*  */}
                </div>
                <div className=" px-16 w-[500px] bg-[#f5f5f5] ">
                    <div className="my-3 flex ">
                        <input type="text" className="border w-64 h-10 p-1 rounded-md" placeholder="Mã giảm giá" />
                        <div className="py-2 px-3 ml-4 h-10 border-1 rounded-md font-medium text-sm cursor-pointer border-[#000] bg-[#d6d6d6] text-[#8a8585]">Áp dụng</div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className=" font-normal text-sm">Tổng số tiền:</p>
                        <p className="font-medium">$129.99 đ</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className=" font-normal text-sm">Vận chuyển</p>
                        <p className="">25.000 đ</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className=" font-bold text-[17px]">Tổng</p>
                        <p className="font-medium">$129.99 đ</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout