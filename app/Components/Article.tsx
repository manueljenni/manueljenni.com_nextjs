import Link from "next/link";

export default function Article({ content, data }: any) {
  return (
    <div>
      <div className="centerDiv text-center">
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium">{data.title}</h1>
            <h2 className="text-2xl">{data.subtitle}</h2>
          </div>
          <div className="centerDiv">
            <div className="flex space-x-3 text-sm text-white">
              {data.tags.map((tag: string) => (
                <div className="rounded-lg bg-main px-2 py-1" id={tag}>
                  <p>{"#" + tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="prose">{content}</div>
      <Link href={"/articles"}>
        <p className="accentText mt-8">← All articles</p>
      </Link>
    </div>
  );
}
