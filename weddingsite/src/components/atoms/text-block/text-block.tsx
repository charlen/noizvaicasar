import './text-block.css'

export default function TextBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col  items-center text-center space-x-3 ${className}`}>
      <div className={`flex flex-col text-6xl ${className}`}>{children}</div>
    </div>
  );
}