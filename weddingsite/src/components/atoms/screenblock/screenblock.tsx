import './screenblock.css';

export default function ScreenBlock({
    children,
    className
}: {
    children?: React.ReactNode
    className?: string
}) {
    return <div className={
        `
         screenblock
         flex
         items-start 
         justify-center 
         h-screen 
         p-0 
         m-0
         border-0
         sm:items-start 
         lg:items-center 
         md:items-center
         ${className}`
        }>
        {children}
    </div>
}