import { ICommentEntity } from '@/entities/comments'
import './index.css'


export function CommentCard(props: ICommentEntity) {
    const { user, comment } = props

    return (
        <div className="comment">
            <div className="comment-avatar">
                {user.charAt(0)}
            </div>

            <div className="comment-content">
                <h3 className="comment-title">{user}</h3>
                <h3 className="comment-description">{comment}</h3>
            </div>
        </div>
    )
}