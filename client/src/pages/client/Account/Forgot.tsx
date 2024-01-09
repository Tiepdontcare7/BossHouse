import React from 'react'

const Forgot = () => {
    return (
        <div className='mb-20 mt-10' >
            <h3 className="text-3xl font-bold py-3 bg-[#f7f7f7] h-[70px] text-center">Quên Mật Khẩu</h3>
            <div className="xl:mx-[80px] mx-10">
                <h1 className=" text-base font-bold mt-4">Quên mật khẩu? Vui lòng nhập địa chỉ email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua email.</h1>
                <form action="" className="mt-[20px]">
                    <div className="my-[20px]">
                        <div className="text-base font-semibold">Nhập địa chỉ email *</div>
                        <input type="text" name="email" className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />

                    </div>

                    <div>
                        <button className="px-5 py-2 bg-[blue] text-[white] font-semibold hover:bg-[#3535bb] ">ĐẶT LẠI MẬT KHẨU</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Forgot