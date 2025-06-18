import ColorSwatch from "../atoms/ColorSwatch";

interface Props {
  colors: string[];
  onSelect: (color: string) => void;
  title?: string;
  columns?: number;
}

const ColorSwatchGrid: React.FC<Props> = ({
  colors,
  onSelect,
  title,
  columns = 6
}) => {
  return (
    <div>
      {title && <p className="mb-1 text-xs text-gray-500">{title}</p>}
      <div className={`grid grid-cols-${columns} gap-1`}>
        {colors.map((color) => (
          <ColorSwatch key={color} color={color} onClick={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default ColorSwatchGrid;
