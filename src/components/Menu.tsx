"use client";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { authService } from "@/apis/auth";
import { useAppContext } from "@/app/context";

type Props = {
  open: boolean;
  onClose: () => void;
};

type MenuItem = {
  name: string;
  onClick: () => void;
};

const Menu = ({ open, onClose }: Props) => {
  const router = useRouter();

  const { setUser } = useAppContext();

  const handleSignOut = async () => {
    const data = await authService.signOut();
    if (data) {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    router.push("/auth/sign-in");
  };
  const menus = [
    {
      name: "Profile",
      onClick: () => router.push("/profile"),
    },
    {
      name: "Admin",
      onClick: () => router.push("/admin"),
    },
    {
      name: "Sign Out",
      onClick: handleSignOut,
    },
  ];

  const handleClickMenu = (item: MenuItem) => {
    item?.onClick();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-40 h-fit p-4 flex flex-col gap-y-4 rounded-lg bg-white">
        {menus.map((item: MenuItem, i: number) => (
          <div
            className="text-sm font-semibold cursor-pointer hover:underline"
            key={i}
            onClick={() => handleClickMenu(item)}
          >
            {item?.name}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Menu;
