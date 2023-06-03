import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
export const MenuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTh />,
  },
  {
    path: "/about",
    name: "About",
    icon: <FaUserAlt />,
  },
  {
    path: "/analytic",
    name: "Analytic",
    icon: <FaRegChartBar />,
  },
  {
    path: "/comment",
    name: "Comment",
    icon: <FaCommentAlt />,
  },
  {
    path: "/product",
    name: "Product",
    icon: <FaShoppingBag />,
  },
  {
    path: "/productList",
    name: "ProductList",
    icon: <FaThList />,
  },
];
