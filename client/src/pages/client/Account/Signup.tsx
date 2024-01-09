const Signup = () => {
    return (
            <div className=" xl:mx-[80px] mx-10 mb-20 mt-10">
                <h3 className="text-3xl font-bold py-3 bg-[#f7f7f7] h-[70px] text-center">Đăng Ký</h3>
                <form action=""  className="mt-[20px]">
                    <div>
                        <div className="text-base font-semibold ">Họ và Tên </div>
                        <input type="text"   className="w-full border  h-9 mt-[5px] shadow-inner" />
                    </div>
                    <div className="my-[20px]">
                        <div className="text-base font-semibold ">Email </div>
                        <input type="text"   className="w-full border  h-9 mt-[5px]  shadow-inner" />
                        
                    </div>
                    <div>
                        <div className="text-base font-semibold ">Mật Khẩu </div>
                        <input type="password"   className="w-full border  h-9 mt-[5px]  shadow-inner" />
                    </div>
                    <div className="my-[20px]">
                        <div className="text-base font-semibold ">Nhập Lại Mật Khẩu </div>
                        <input type="password"  className="w-full border  h-9 mt-[5px]  shadow-inner" />
                    </div>
                    <div className="my-[20px]">
                       
                    </div>
                    <div>
                        <button className="px-10 py-2 bg-[blue] text-[white] font-semibold hover:bg-[#3535bb] ">Đăng Ký</button>
                    </div>
                    
                </form>
            </div>
    )
}

export default Signup


