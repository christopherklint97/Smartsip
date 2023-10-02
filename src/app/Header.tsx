import { FC, useState } from "react";
import Link from "next/link";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/base";
import { ExpandLess, ExpandMore, ShoppingCart } from "@mui/icons-material";

export const Header: FC = () => (
  <header className="sticky top-0 h-20 flex justify-center items-center px-4 border-b-2 border-black">
    <nav className="max-w-5xl w-full flex flex-row justify-between">
      <Link className="text-4xl" href={"/"}>
        SmartSip
      </Link>
      <ul className="flex flex-row gap-8 items-center">
        <li>
          <Link className="text-sm" href={"/butik"}>
            Köp nu
          </Link>
        </li>
        <li>
          <Link className="text-sm" href={"/varfor-smartsip"}>
            Varför SmartSip?
          </Link>
        </li>
        <li>
          <Link className="text-sm" href={"/om-oss"}>
            Om oss
          </Link>
        </li>
        <li>
          <Link className="text-lg" href={"/varukorg"}>
            <ShoppingCart fontSize="inherit" />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
