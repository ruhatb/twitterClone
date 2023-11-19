import { useState } from "react";
import Tweet from "./Tweet";

const TweetList = () => {
  const [tweets, setTweets] = useState([
    { tweet: "my first tweet", user: { name: "Ruhat" } },
    { tweet: "my second tweet", user: { name: "Adnan" } },
  ]);
  return (
    <div>
      {tweets.map((item) => (
        <Tweet tweet={item} />
      ))}
    </div>
  );
};
export default TweetList;
