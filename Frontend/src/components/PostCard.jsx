import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { postsAPI } from '../services/api';
import '../styles/PostCard.css';

const PostCard = ({ post, onDelete, onUpdate }) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const isOwner = user?._id === post.user._id;
  const isLiked = post.likes.includes(user?._id);

  const handleLike = async () => {
    try {
      const response = await postsAPI.likePost(post._id);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postsAPI.deletePost(post._id);
        onDelete(post._id);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleEdit = async () => {
    try {
      const response = await postsAPI.updatePost(post._id, { content: editContent });
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const response = await postsAPI.addComment(post._id, { text: comment });
      onUpdate(response.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await postsAPI.deleteComment(post._id, commentId);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-author">
          <div className="author-avatar">
            {post.user.name.charAt(0).toUpperCase()}
          </div>
          <div className="author-info">
            <h4>{post.user.name}</h4>
            <p className="post-date">{formatDate(post.createdAt)}</p>
          </div>
        </div>
        {isOwner && (
          <div className="post-actions">
            <button onClick={() => setIsEditing(!isEditing)} className="btn-icon">
              ✏️
            </button>
            <button onClick={handleDelete} className="btn-icon">
              🗑️
            </button>
          </div>
        )}
      </div>

      <div className="post-content">
        {isEditing ? (
          <div className="edit-form">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows="3"
            />
            <div className="edit-buttons">
              <button onClick={handleEdit} className="btn-primary">Save</button>
              <button onClick={() => setIsEditing(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <p>{post.content}</p>
            {post.image && (
              <div className="post-image">
                <img src={post.image} alt="Post content" />
              </div>
            )}
          </>
        )}
      </div>

      <div className="post-stats">
        <span>{post.likes.length} likes</span>
        <span>{post.comments.length} comments</span>
      </div>

      <div className="post-interactions">
        <button 
          onClick={handleLike} 
          className={`btn-interaction ${isLiked ? 'liked' : ''}`}
        >
          👍 {isLiked ? 'Liked' : 'Like'}
        </button>
        <button 
          onClick={() => setShowComments(!showComments)} 
          className="btn-interaction"
        >
          💬 Comment
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          <form onSubmit={handleAddComment} className="comment-form">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn-primary">Post</button>
          </form>

          <div className="comments-list">
            {post.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <div className="comment-avatar">
                  {comment.user.name.charAt(0).toUpperCase()}
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <strong>{comment.user.name}</strong>
                    <span className="comment-date">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p>{comment.text}</p>
                </div>
                {user?._id === comment.user._id && (
                  <button 
                    onClick={() => handleDeleteComment(comment._id)} 
                    className="btn-icon-small"
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
