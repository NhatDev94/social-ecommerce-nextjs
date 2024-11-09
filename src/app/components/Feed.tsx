"use client";

import feedService from "@/apis/feed";
import { FeedType } from "@/libs/types/feed";
import { useEffect, useState } from "react";
import FeedItem from "./FeedItem";

export default function Feed() {
  const [feed, setFeed] = useState<FeedType[]>([]);

  const getFeed = async () => {
    const data = await feedService.getFeed();
    if (data.status === "success") {
      setFeed(data.data);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="w-full px-64">
      {feed.length > 0 &&
        feed.map((item: FeedType, i: number) => (
          <FeedItem item={item} key={i} />
        ))}
    </div>
  );
}
