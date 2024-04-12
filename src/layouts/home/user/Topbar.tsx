// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// // import logoIcon from "../../../../../../public/icons/Group.svg";
// import logoIcon from "../../../../public/icons/Group.svg";
// import { setLogout } from "../../../store/slices/auth/authSlice.reducers";
// import { Link } from "react-router-dom";
// import { cn } from "../../../utils/ui/classNameConcat";
// import GreenButton from "../../../components/GreenButton";
// import WhiteButton from "../../../components/WhiteButton";

// export interface NavItem {
//   title: string;
//   to?: string;
//   disabled?: boolean;
//   external?: boolean;
// }

// interface TopbarProps {
//   items?: NavItem[];
// }

// export interface RootState {
//   auth: {
//     isLoggedIn: boolean;
//   };
// }

// const Topbar = ({ items }: TopbarProps) => {
//   const [scrolling, setScrolling] = useState(true);
//   const [scrollTop, setScrollTop] = useState(0);
//   const dispatch = useDispatch();

//   const handleScroll = () => {
//     setScrollTop(window?.scrollY);
//     window?.scrollY > scrollTop ? setScrolling(false) : setScrolling(true);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollTop]);

//   const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
//   const handleSignOut = () => {
//     dispatch(setLogout());
//     localStorage.clear();
//     console.log("otp logout");
//   };
//   return (
//     <header
//       className={`bg-[white] font-nunito font-head top-0 z-40 w-full border-b shadow-[0px_3px_10px_0px_rgba(0,0,0,0.12)] ${
//         scrolling ? "sticky" : ""
//       }`}
//     >
//       <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-[24px] py-[18px] ">
//         <div className="flex gap-6 md:gap-10">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src={logoIcon} alt={""} />
//           </Link>
//           {items?.length ? (
//             <nav className="flex gap-6">
//               {items?.map(
//                 (item, index) =>
//                   item.to && (
//                     <Link
//                       key={index}
//                       to={item.to}
//                       className={cn(
//                         "flex items-center text-sm font-medium text-muted-foreground",
//                         item.disabled && "cursor-not-allowed opacity-80"
//                       )}
//                     >
//                       <div className="text-[#0B2C3D] text-[15px] font-[400]">
//                         {item.title}
//                       </div>
//                     </Link>
//                   )
//               )}
//             </nav>
//           ) : null}
//         </div>
//         <div className="flex flex-1 items-center justify-end space-x-4">
//           {isLoggedIn ? (
//             <Link to={"/add-property"}>
//               <GreenButton
//                 buttonText={"Add Listing"}
//                 className="hover:border hover:border-primary"
//               />
//             </Link>
//           ) : null}

//           {isLoggedIn ? (
//             <WhiteButton
//               click={handleSignOut}
//               buttonText={"Logout"}
//               className="border-primary border-[1px] bg-transparent "
//             />
//           ) : (
//             <div className="flex gap-4">
//               <Link to={"/login"}>
//                 <WhiteButton
//                   buttonText={"Login"}
//                   className="border-primary border-[1px] bg-transparent "
//                 />
//               </Link>
//               <Link to={"/register"}>
//                 <GreenButton
//                   buttonText="Register"
//                   className="hover:text-white"
//                 />
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Topbar;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logoIcon from "../../../../public/icons/Group.svg";
import { setLogout } from "../../../store/slices/auth/authSlice.reducers";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/ui/classNameConcat";
import GreenButton from "../../../components/GreenButton";
import WhiteButton from "../../../components/WhiteButton";
import sandwich from "../../../../public/icons/Vector (3).svg";

export interface NavItem {
  title: string;
  to?: string;
  disabled?: boolean;
  external?: boolean;
}

interface TopbarProps {
  items?: NavItem[];
}

export interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

const Topbar = ({ items }: TopbarProps) => {
  const [scrolling, setScrolling] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false); //  state for dropdown menu
  const dispatch = useDispatch();

  const handleScroll = () => {
    setScrollTop(window?.scrollY);
    window?.scrollY > scrollTop ? setScrolling(false) : setScrolling(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);
  console.log(items, "navbar items");
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const handleSignOut = () => {
    dispatch(setLogout());
    localStorage.clear();
    console.log("otp logout");
  };

  return (
    <header
      className={`bg-[white] font-nunito font-head top-0 z-40 w-full border-b shadow-[0px_3px_10px_0px_rgba(0,0,0,0.12)] ${
        scrolling ? "sticky" : ""
      }`}
    >
      <div className="md:container flex h-16 w-full items-center sm:justify-between sm:space-x-0 md:px-[24px] py-[18px] ">
        <div className="hidden md:flex md:items-center sm:gap-6 md:gap-10 w-full">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoIcon} alt={""} />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between w-full">
          {isLoggedIn ? (
            <Link to={"/add-property"}>
              <GreenButton
                buttonText={"Add Listing"}
                className="hover:border hover:border-primary"
              />
            </Link>
          ) : null}
          <div className="flex px-[30px] justify-between items-center gap-4 w-full">
            <div>
              {isLoggedIn ? (
                <WhiteButton
                  click={handleSignOut}
                  buttonText={"Logout"}
                  className="border-primary border-[1px] bg-transparent "
                />
              ) : (
                <div className="flex gap-4">
                  <Link to={"/login"}>
                    <WhiteButton
                      buttonText={"Login"}
                      className="border-primary border-[1px] bg-transparent "
                    />
                  </Link>
                  <Link to={"/register"}>
                    <GreenButton
                      buttonText="Register"
                      className="hover:text-white"
                    />
                  </Link>
                </div>
              )}
            </div>
      
          {/* dropdown menu for mobile view */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          </div>
        </div>
        {/* navigation items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden absolute inset-x-0 top-[66px] bg-white z-20 m-0 h-[400px] shadow-2xl`}
        >
          {items?.length ? (
            <div className="flex flex-col gap-y-5 w-full mt-[9px]">
              {items?.map(
                (item, index) =>
                  item.to && (
                    <Link
                      key={index}
                      to={item.to}
                      className={cn(
                        "block px-4 py-2 rounded-md text-base font-medium text-muted-foreground sm:mt-0 w-full",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      <div className="text-[#0B2C3D] text-[15px] font-[400] hover:bg-primary hover:p-4 hover:rounded hover:text-white">
                        {item.title}
                      </div>
                    </Link>
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
