export const Tag = ({ tag }: { tag: string }) => {
  // TODO: find a better way to split
  const split = tag.split(/^([^:]+):/gm).filter((s) => s.length > 0);
  if (split.length == 1) {
    split.unshift("");
  }

  const [category, name] = split;
  return (
    <div className="tag" data-category={category}>
      {category && <div className="category">{category}</div>}
      <div className="name">{name}</div>
    </div>
  );
};
