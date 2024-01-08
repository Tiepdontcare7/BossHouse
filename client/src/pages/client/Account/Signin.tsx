import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div className='mb-20'>
      <h3 className="text-3xl font-bold py-3 bg-[#f7f7f7] h-[70px] text-center">MY ACCOUNT</h3>
      <div className="xl:mx-[80px] mx-10">
        <h1 className="xl:text-xl text-base font-bold mt-4"> ĐĂNG NHẬP</h1>
        <form action="" className="mt-[20px]">
          <div className="my-[20px]">
            <div className="text-base font-semibold">Tên tài khoản hoặc địa chỉ email *</div>
            <input type="text" name="email" className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />

          </div>
          <div>
            <div className="text-base font-semibold">Mật Khẩu </div>
            <input type="password" className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
          </div>
          <div className="my-[20px]">
            <input type="checkbox" name="" id="" />
            <span className="ml-[10px] text-base font-semibold">Ghi nhớ mật khẩu</span>
          </div>
          <div>
            <button className="px-10 py-2 bg-[blue] text-[white] font-semibold hover:bg-[#3535bb] mb-6">Đăng Nhập</button>
          </div>
          <div className="mt-[10px]">
            <Link to="/loss-password">  <button className=" font-sm font-medium">Quên mật khẩu?</button></Link>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signin