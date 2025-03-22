export default function LittleWhiteText({ children, className }: { children: React.ReactNode, className?: string }) {
    return <span className={`white-text text-center ${className}`}>{children}</span>
}