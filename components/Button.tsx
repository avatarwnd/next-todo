export interface ButtonProps {
  title: string;
  handleClick?: () => void;
  className?: string;
}

export const Button = ({ handleClick: handlClick, title, className }: ButtonProps) => {
  return (
    <button
      className={"bg-gray-200 border border-black p-2" + " " + className}
      onClick={handlClick}
    >
      {title}
    </button>
  );
};
