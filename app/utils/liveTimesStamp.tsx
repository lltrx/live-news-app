"use client";
import TimeAgo from "react-timeago";

type Props = {
  time: string;
};

function LiveTimesStamp({ time }: Props) {
  return <TimeAgo date={time} />;
}

export default LiveTimesStamp;
