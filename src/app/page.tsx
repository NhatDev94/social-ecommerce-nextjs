import QuickCreate from "@/components/QuickCreate";
import Feed from "./components/Feed";
import Image from "@/components/commons/Image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-64px)] bg-gray-200 p-4 overflow-y-scroll">
      <div className="hero w-full h-fit mb-4 bg-yellow-200">
        <Image
          src="https://images.pexels.com/photos/28271474/pexels-photo-28271474/free-photo-of-thanh-ph-k-ngh-ngh-thu-t-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="image"
          layout="responsive"
          priority={true}
        />
      </div>
      <Feed />
      <div className="fixed bottom-10 right-10">
        <QuickCreate />
      </div>
    </div>
  );
}
