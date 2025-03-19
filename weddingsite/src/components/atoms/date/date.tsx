import './date.css'

export default function Date(
    {
        className
    }: {
        className?: string
    }

){
    return <div className={`date w-full flex flex-row justify-center items-center text-center ${className}`}>
        <div>17</div>.
        <div>05</div>
    </div>
}