import './index.css'

export interface ICommentCardProps {
    id: string
    user: string
    content: string
}

export function CommentCard(props: ICommentCardProps) {
    const { id, user, content } = props

    return (
        <div className="comment">
            <div className="comment-avatar">
                {user.charAt(0)}
            </div>

            <div className="comment-content">
                <h3 className="comment-title">{user}</h3>
                <h3 className="comment-description">{content}</h3>
            </div>
        </div>
    )
}