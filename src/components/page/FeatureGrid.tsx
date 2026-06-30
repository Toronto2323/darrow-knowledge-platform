type FeatureGridItem = {
  title: string;
  description: string;
  eyebrow?: string;
};

type FeatureGridProps = {
  items?: FeatureGridItem[];
};

export function FeatureGrid({ items = [] }: FeatureGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={`${item.title}-${item.description}`}
          className="rounded-3xl border border-[#F2F2F2]/10 bg-[#111827]/58 p-6 transition hover:border-[#12A646]/60 hover:bg-[#1C2A20]/72"
        >
          {item.eyebrow && (
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#12A646]">
              {item.eyebrow}
            </p>
          )}

          <h3 className="text-xl font-black text-[#F2F2F2]">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#F2F2F2]/72">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
