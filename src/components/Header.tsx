"use client";
import { useRouter } from "next/navigation";
import Button from "./commons/Button";
import Menu from "./commons/Menu";
import { useAppContext } from "@/app/context";
import defaultAvatar from "@/assets/images/defaultAvatar.jpg";

export default function Header() {
  const router = useRouter();

  const { user, setUser } = useAppContext();

  const menuItems = [
    {
      name: "Profile",
      onClick: () => {
        router.push("/account/profile");
      },
    },
    {
      name: "Admin",
      onClick: () => {},
    },
    {
      name: "Sign Out",
      onClick: () => {
        setUser(null);
        localStorage.setItem("user", JSON.stringify(null));
        localStorage.setItem("token", JSON.stringify(null));
        router.push("/account/sign-in");
      },
    },
  ];

  const goSignIn = () => {
    router.push("/account/sign-in");
  };
  const goHome = () => {
    router.push("/");
  };
  const avatar = (
    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200">
      <img
        src={user?.avatar || defaultAvatar}
        alt="avatar"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = defaultAvatar;
        }}
      />
    </div>
  );

  return (
    <div className="w-full h-16 shadow-lg flex items-center justify-between px-10">
      <h4
        className="logo text-3xl font-bold text-black cursor-pointer"
        onClick={goHome}
      >
        Social
      </h4>
      {user ? (
        <Menu
          items={menuItems}
          triggerClass="rounded-full w-9 h-9 flex items-center justify-center"
          triggerContent={avatar}
        />
      ) : (
        <Button onClick={goSignIn}>Sign In</Button>
      )}
    </div>
  );
}
