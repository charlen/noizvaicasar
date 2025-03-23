export default function LittleWhiteText({ children, className, onclick, id }: { children?: React.ReactNode, id?: string, className?: string, onclick?: () => void }) {
    return <span onClick={onclick} id={id} className={`white-text text-center ${className}`}>{children}</span>
}