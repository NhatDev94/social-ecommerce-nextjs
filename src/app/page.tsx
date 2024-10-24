const feedDetail = {
  customer: {
    username: "nhatle",
    avatar:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  content: "Xin chao moi nguoi",
  type: "image",
  media:
    "https://images.pexels.com/photos/28412629/pexels-photo-28412629/free-photo-of-nh-ch-p-t-tren-khong-c-a-me-cung-ngo-hinh-h-c-vao-mua-he.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
};

const feed = [feedDetail, feedDetail, feedDetail, feedDetail, feedDetail];
export default function Home() {
  const getAllUser = async () => {
    const domain = process.env.DOMAIN;

    const data = await fetch(domain + "/auth/all-user").then((res) =>
      res.json()
    );
    console.log(`data: ${JSON.stringify(data)}`);
  };

  getAllUser();

  return (
    <div className="w-full py-6 px-80">
      {feed?.map((item: any, i: number) => (
        <div
          className="bg-gray-300 rounded-lg pt-4 mb-2 overflow-hidden"
          key={i}
        >
          <div className="w-full flex items-center mb-4 px-4">
            <img
              src={item.customer.avatar}
              className="w-10 h-10 rounded-full object-cover"
              alt="avatar"
            />
            <h4 className="text-sm font-semibold capitalize text-black ml-4 cursor-pointer">
              {item.customer.username}
            </h4>
          </div>

          {item?.media && (
            <img
              src={item?.media}
              alt="media"
              className=" w-full h-full object-cover"
            />
          )}

          <div className="w-full h-14 flex items-center justify-between text-sm font-semibold text-black">
            <p className="cursor-pointer w-1/3 h-full flex items-center justify-center hover:bg-white">
              Like
            </p>
            <p className="cursor-pointer w-1/3 h-full flex items-center justify-center hover:bg-white">
              Comment
            </p>
            <p className="cursor-pointer w-1/3 h-full flex items-center justify-center hover:bg-white">
              Share
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
