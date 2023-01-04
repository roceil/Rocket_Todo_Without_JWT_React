import header_logo from "../img/header_logo.svg"
function Header() {
 return (
  <div className="pt-4 px-[34px] flex justify-between">
    <img src={header_logo} alt="logo" />
    <div className="flex items-center">
      <p className="font-bold mr-6">沒有API的待辦</p>
      <button type="button" className="hover_diy p-2">登出</button>
    </div>
  </div>
 )
}

export default Header;