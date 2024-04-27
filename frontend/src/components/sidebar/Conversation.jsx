
const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1713988050~exp=1713988650~hmac=6fa5ec8c23ebc3cd9275bb1f20b28e3fc1827b581e57d8046dccf424671817ab"
                 alt="user avatar" />
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">John Doe</p>
                <span className="text-xl">🎃</span>
            </div>
        </div>

    </div>
    <div className="divider my-0 py-0 h-1" />
    </>
  )
}

export default Conversation;



//starter code snippet
// const Conversation = () => {
//     return (
//       <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//               <div className="w-12 rounded-full">
//                   <img
//                   src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1713988050~exp=1713988650~hmac=6fa5ec8c23ebc3cd9275bb1f20b28e3fc1827b581e57d8046dccf424671817ab"
//                    alt="user avatar" />
//               </div>
//           </div>
  
//           <div className="flex flex-col flex-1">
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-gray-200">John Doe</p>
//                   <span className="text-xl">🎃</span>
//               </div>
//           </div>
  
//       </div>
//       <div className="divider my-0 py-0 h-1" />
//       </>
//     )
//   }
  
//   export default Conversation;