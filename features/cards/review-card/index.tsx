import Image, { StaticImageData } from "next/image"
import "./index.css"

export interface IReviewCardProps {
    id: string
    src: StaticImageData
    user: string
    comment: string
}

export default function ReviewCard(props: IReviewCardProps) {
    const { user, comment, src } = props
    
    return (
        <div className="paper review-card">
            <Image src={src} alt="image" className="review-card-image" />

            <h3 className="review-card-title">{user}</h3>

            <p className="review-card-comment">{comment}</p>
        </div>
    )
}