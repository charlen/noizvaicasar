export default function DefaultButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="text-2xl link lg:w-[300px]"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}