import React, { ReactNode } from "react";
import breadCrumbIcon from "../../../../../public/icons/breadCrumbArrow.svg";
import capitalizeFirstLetter from "./CapitalizeString";

import { useLocation } from "react-router-dom";

interface CustomBreadcrumbProps {
  homeElement: JSX.Element;
  capitalizeLinks: boolean;
}
type TCustomBreadcrumbProps = {
  homeElement: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};
const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  homeElement,
  capitalizeLinks,
}: CustomBreadcrumbProps) => {
  const location = useLocation();
  const paths = location.pathname;
  const pathNames = paths.split("/").filter((path) => path);
  const classes: { [key: string]: string } = {};

  return (
    <div className="flex gap-[10px]">
      <div>
        <a href={"/"}>{homeElement}</a>
      </div>
      {pathNames.length > 0 && <img src={breadCrumbIcon} alt={""} />}

      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        let itemClasses =
          paths === href ? `text-[#000] text-[16px] font-[400]` : "";
        let itemLink = capitalizeLinks ? capitalizeFirstLetter(link) : link;
        return (
          <React.Fragment key={index}>
            <div className={itemClasses}>
              <a href={href}>{itemLink}</a>
            </div>
            {pathNames.length !== index + 1 && (
              <img src={breadCrumbIcon} alt={""} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CustomBreadcrumb;

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     breadcrumbWrapper: {
//       display: "flex",
//       columnGap: "10px",
//       alignItems: "center",
//       margin: "30px 0",
//       [theme.breakpoints.down("md")]: {
//         margin: "20px 0",
//       },
//       [theme.breakpoints.down("sm")]: {
//         margin: "15px 0",
//       },
//       [theme.breakpoints.down("sm:")]: {
//         margin: "10px 0",
//       },
//     },
//     crumbItem: {
//       listStyleType: "none",
//       display: "flex",
//       alignItems: "center",
//       "& > a": {
//         color: "#717171",
//         fontFamily: "Roboto",
//         fontSize: "12px",
//         fontWeight: 400,
//         lineHeight: "18px",
//         textDecoration: "none",
//       },
//     },
//     actCrumbItem: {
//       "& > a": {
//         color: "#000000",
//       },
//     },
//   })
// );
// const CustomBreadcrumb = ({
//   homeElement,
//   capitalizeLinks,
// }: TCustomBreadcrumbProps) => {
//   const router = useRouter();
//   const paths = router.asPath;
//   const pathNames = paths.split("/").filter((path) => path);
//   const classes = {};
//   return (
//     <div className="flex gap-[10px]">
//       <div>
//         <Link href={"/"}>{homeElement}</Link>
//       </div>
//       {pathNames.length > 0 && <Image src={breadCrumbIcon} alt={""} />}

//       {pathNames.map((link, index) => {
//         let href = `/${pathNames.slice(0, index + 1).join("/")}`;
//         let itemClasses =
//           paths === href ? `text-[#000] text-[16px] font-[400]` : "";
//         let itemLink = capitalizeLinks ? capitalizeFirstLetter(link) : link;
//         return (
//           <React.Fragment key={index}>
//             <div className={itemClasses}>
//               <Link href={href}>{itemLink}</Link>
//             </div>
//             {pathNames.length !== index + 1 && (
//               <Image src={breadCrumbIcon} alt={""} />
//             )}
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// };
// export default CustomBreadcrumb;
