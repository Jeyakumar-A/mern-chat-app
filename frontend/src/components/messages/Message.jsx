const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                alt='Tailwind CSS chat bubble componenet'
                src={
                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1713988050~exp=1713988650~hmac=6fa5ec8c23ebc3cd9275bb1f20b28e3fc1827b581e57d8046dccf424671817ab"
                }/>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  );
};

export default Message;



// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                   <img 
//                   alt='Tailwind CSS chat bubble componenet'
//                   src={
//                       "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1713988050~exp=1713988650~hmac=6fa5ec8c23ebc3cd9275bb1f20b28e3fc1827b581e57d8046dccf424671817ab"
//                   }/>
//               </div>
//           </div>
//           <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is up?</div>
//           <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//       </div>
//     );
//   };
  
//   export default Message;