import { useEffect, useState } from "react";
import Utils from "../Utils";

export default function BoxThree(props: any) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 500);

    // Clear the interval when the component is unmounted or when the dependency changes
    return () => clearInterval(interval);
  }, [setTime]);

  return (
    <div className="centerDiv boxComponent rounded-lg p-4 ring-1 ring-neutral-300">
      <div className="space-y-2 text-center">
        <p className="text-lg">{props.top}</p>
        <p className="text-2xl font-medium">
          {time.toLocaleTimeString() + " " + Utils.getCurrentTimeEmoji(new Date())}
        </p>
        <p className="text-lg">{props.bottom}</p>
      </div>
    </div>
  );
}
