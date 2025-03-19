export default function TextBlockGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-row space-x-4 text-block-group ${className}`}>
    {children}
    </div>;
}