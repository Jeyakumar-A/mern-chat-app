import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {

  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? (
      <CiLogout className="w-6 h-6 text-white cursor-pointer" 
        onClick={logout}
        />
        ):(
          <span className="loading loading-spinner"></span>
        )}
        
    </div>
  )
}

export default LogoutButton;


//starter code snippet
// import { CiLogout } from "react-icons/ci";
// const LogoutButton = () => {
//   return (
//     <div className='mt-auto'>
//         <CiLogout className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   )
// }

// export default LogoutButton;