import './quoted-text.css';

export default function QuotedText({ children, className }:{ children: React.ReactNode, className?: string }) {
    return <div className={`quoted-text text-center items-center justify-center flex flex-col h-full ${className}`}>
        {children}
    </div>
}