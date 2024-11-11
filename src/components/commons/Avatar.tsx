import Image from "./image/Image";

export default function Avatar() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 cursor-pointer">
      <Image alt="avatar" width={48} height={48} />
    </div>
  );
}
