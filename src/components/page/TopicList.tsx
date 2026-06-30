type TopicListProps = {
  title: string;
  items: string[];
};

export function TopicList({ title, items }: TopicListProps) {
  return (
    <div className="rounded-[2rem] border border-[#F2F2F2]/10 bg-[#0B0F1A]/72 p-6">
      <h2 className="text-2xl font-black text-[#F2F2F2]">{title}</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-[#F2F2F2]/10 bg-[#262626]/72 px-4 py-3 text-sm font-semibold text-[#F2F2F2]/82">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
