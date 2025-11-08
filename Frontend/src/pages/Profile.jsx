import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { usersAPI, postsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import PostCard from '../components/PostCard';
import '../styles/Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: '', bio: '' });

  const isOwnProfile = currentUser?._id === userId;

  const fetchProfileData = useCallback(async () => {
    try {
      const [profileRes, postsRes] = await Promise.all([
        usersAPI.getUserProfile(userId),
        postsAPI.getUserPosts(userId)
      ]);
      setProfile(profileRes.data);
      setPosts(postsRes.data);
      setEditData({ name: profileRes.data.name, bio: profileRes.data.bio || '' });
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    ));
  };

  const handleEditProfile = async () => {
    try {
      await usersAPI.updateProfile(editData);
      setProfile({ ...profile, ...editData });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="error">Profile not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-cover">
          <div className="cover-gradient"></div>
        </div>
        
        <div className="profile-content">
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">
              {profile.name.charAt(0).toUpperCase()}
            </div>
          </div>

          {isEditing ? (
            <div className="profile-edit-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={editData.bio}
                  onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />
              </div>
              <div className="edit-actions">
                <button onClick={handleEditProfile} className="btn-primary">
                  Save Changes
                </button>
                <button onClick={() => setIsEditing(false)} className="btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-details">
              <div className="profile-header-info">
                <h1>{profile.name}</h1>
                <p className="profile-email">{profile.email}</p>
                {profile.bio && <p className="profile-bio">{profile.bio}</p>}
                {!profile.bio && isOwnProfile && (
                  <p className="profile-bio-empty">Add a bio to tell people about yourself</p>
                )}
              </div>

              {isOwnProfile && (
                <button onClick={() => setIsEditing(true)} className="btn-edit-profile">
                  ✏️ Edit Profile
                </button>
              )}
            </div>
          )}

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">{posts.length}</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{posts.reduce((acc, post) => acc + post.likes.length, 0)}</span>
              <span className="stat-label">Likes Received</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{posts.reduce((acc, post) => acc + post.comments.length, 0)}</span>
              <span className="stat-label">Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-posts-section">
        <div className="posts-header">
          <h2>
            <span className="posts-icon">📝</span>
            {isOwnProfile ? 'Your Posts' : `${profile.name}'s Posts`}
          </h2>
        </div>
        
        {posts.length === 0 ? (
          <div className="no-posts-profile">
            <div className="no-posts-icon">📭</div>
            <p>{isOwnProfile ? "You haven't posted anything yet" : "No posts yet"}</p>
            {isOwnProfile && (
              <p className="no-posts-hint">Share your first post on the home page!</p>
            )}
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                onDelete={handlePostDeleted}
                onUpdate={handlePostUpdated}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
