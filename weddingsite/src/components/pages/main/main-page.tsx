import './main-page.css';

export default function MainPage({
    children,
    className
}: {
    children?: React.ReactNode,
    className?: string
}) {
    return <>
        <div className={`header ${className}`}>
            {children}
        </div>
    </>
}