import { useRouter } from "next/navigation"

export default function Logo() {
    const router = useRouter()

    const handleOnRedirect = () => {
        router.push('/')
    }
    
    return (
        <h2 className="text-xl uppercase font-serif font-medium w-[340px] cursor-pointer" onClick={handleOnRedirect}>
            <span className="block w-[150px]" style={{ letterSpacing: '0.03rem' }}>Нутрициолог</span>
            
            <span>
                Мария <span className="text-primary-main">Коляда</span>
            </span>
        </h2>
    )
}