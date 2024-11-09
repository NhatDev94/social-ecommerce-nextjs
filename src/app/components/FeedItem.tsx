import Avatar from "@/components/commons/Avatar";
import Image from "@/components/commons/Image";

type Media = {
  url: string;
};

type Props = {
  item: {
    description: string;
    media: Media[];
  };
};

export default function FeedItem({ item }: Props) {
  return (
    <div className="w-full bg-white mb-4 rounded-lg overflow-hidden">
      <div className="w-full flex items-center justify-between px-4 py-2">
        <div className="w-full flex items-center gap-x-2">
          <Avatar />
          <h4 className=" cursor-pointer text-black text-sm font-semibold">
            Name
          </h4>
        </div>

        <p className=" cursor-pointer text-black font-semibold">X</p>
      </div>

      <p className="text-sm font-normal text-black px-4 ">{item.description}</p>
      <div className="pt-4 w-full max-h-[480px] overflow-hidden">
        <Image src={item.media[0].url} alt="media" />
      </div>

      <div className="w-full flex items-center justify-between border-t border-black/10 mt-4">
        <p className="text-sm font-semibold text-black flex items-center justify-center cursor-pointer w-1/3 py-4 hover:bg-black/5">
          Like
        </p>
        <p className="text-sm font-semibold text-black flex items-center justify-center cursor-pointer w-1/3 py-4 hover:bg-black/5">
          Comment
        </p>
        <p className="text-sm font-semibold text-black flex items-center justify-center cursor-pointer w-1/3 py-4 hover:bg-black/5">
          Share
        </p>
      </div>
    </div>
  );
}
