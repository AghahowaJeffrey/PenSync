
interface Props {
  color: string;
  onClick: (color: string) => void;
}

const ColorSwatch: React.FC<Props> = ({ color, onClick }) => (
  <button
    onClick={() => onClick(color)}
    className="w-6 h-6 rounded-full border border-gray-200"
    style={{ backgroundColor: color }}
    title={color}
  />
);

export default ColorSwatch;
