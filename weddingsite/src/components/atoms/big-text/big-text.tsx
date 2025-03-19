export default function BigText({
    children,
    className
}: {
    children?: React.ReactNode,
    className?: string
}){
    return <div className={`big-text text-4xl lg:text-6xl ${className}`}>{children}</div>
}