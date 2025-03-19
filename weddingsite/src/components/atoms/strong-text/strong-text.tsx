
import './strong-text.css';

export default function StrongText({
    children,
    className
}:{
    children?: React.ReactNode
    className?: string
}){
    return <div className={`font-bold ${className}`}>{children}</div>
}