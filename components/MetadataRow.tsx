type MetadataItem = { label: string; value: string };

export default function MetadataRow({ items }: { items: MetadataItem[] }) {
  return (
    <dl className="grid grid-cols-1 border-b border-[#333] md:grid-cols-2">
      {items.map((m, i) => (
        <div
          key={m.label}
          className={`flex items-baseline gap-4 px-8 py-6 ${
            i % 2 === 0 ? "md:border-r border-[#333]" : ""
          } ${i < items.length - 2 ? "border-b border-[#333]" : ""} ${
            items.length % 2 === 1 && i === items.length - 1
              ? "border-b-0"
              : ""
          }`}
        >
          <dt className="shrink-0 text-[11px] font-bold tracking-[0.25em] text-[#888]">
            {m.label}:
          </dt>
          <dd className="text-[14px] font-medium leading-snug">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}
