import './sepia-mask.css';

export default function SepiaMask(
    {
        children,
        className
    }: {
        children?: React.ReactNode,
        className?: string,
    }
) {

    return <div className={`
        lg:text-2xl 
        sm:text-sm 
        font-bold 
        flex 
        flex-1/2 
        flex-col 
        w-[100%]
        bg-[rgba(70,60,29,0.5)] 
        p-5 
        ${className}
    `}>
    {children}
    </div> 
        
}