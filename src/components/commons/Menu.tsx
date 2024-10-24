"use client";

import { ReactNode, useState } from "react";
import { functionType } from "@/libs/types/function";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
type Item = {
  name: string;
  onClick: functionType;
};

type Props = {
  items: Item[];
  triggerClass?: string;
  triggerContent?: ReactNode;
};
export default function Menu({
  items = [],
  triggerClass = "",
  triggerContent = "Menu",
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenuItem = (item: Item) => {
    item.onClick();
    handleClose();
  };

  return (
    <div>
      <div
        className={`cursor-pointer ${triggerClass}`}
        id="basic-button"
        onClick={handleClickMenu}
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {triggerContent}
      </div>
      <MuiMenu
        id="basic-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
            },
          },
        }}
      >
        {items.map((item: Item, i: number) => {
          return (
            <MenuItem onClick={() => handleClickMenuItem(item)} key={i}>
              {item.name}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </div>
  );
}
