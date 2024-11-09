import QuickCreate from "@/components/QuickCreate";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-64px)] bg-gray-200 p-4 overflow-y-scroll">
      <Feed />
      <div className="fixed bottom-10 right-10">
        <QuickCreate />
      </div>
    </div>
  );
}
