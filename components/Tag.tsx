export const Tag = ({ tag }: { tag: string }) => {
  // TODO: find a better way to split
  const [category, name] = tag.split(/^([^:]+):/gm).filter((s) => s.length > 0);
  return (
    <div className="tag" data-category={category}>
      {category && <div className="category">{category}</div>}
      <div className="name">{name}</div>
    </div>
  );
};
