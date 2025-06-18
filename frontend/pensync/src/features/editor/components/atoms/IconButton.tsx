import type React from "react";


interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon?: React.ReactElement;
  active?: boolean;
  label: string;
  children?: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, active = false, label, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`p-2 rounded
        ${
          active
            ? "bg-blue-100 text-gray-800 hover:bg-blue-100"
            : " text-gray-600 hover:bg-gray-200"
        }`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );

}

export default IconButton;
