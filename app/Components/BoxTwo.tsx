import React from "react";

export default function BoxTwo(props: any) {
  return (
    <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300 boxComponent">
      <div className="space-y-2 text-center">
        <p className="text-2xl font-medium">{props.main}</p>
        <p className="text-2xl">{props.bottom}</p>
      </div>
    </div>
  );
}
