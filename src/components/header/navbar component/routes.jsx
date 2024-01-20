import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Explore",
    href: "/",
    Icon: FiSearch,
  },
  {
    title: "Pricing",
    href: "/",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "/about",
    Icon: PiChatCircleBold,
  },
  {
    title: "Cart",
    href: "/cart",
    Icon: SlBasket,
  }
];