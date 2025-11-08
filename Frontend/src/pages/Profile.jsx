import { useState, useEffect } from 'react';
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

  const isOwnProfile = currentUser?._id === userId;

  useEffect(() => {
    fetchProfileData();
  }, [userId]);

  const fetchProfileData = async () => {
    try {
      const [profileRes, postsRes] = await Promise.all([
        usersAPI.getUserProfile(userId),
        postsAPI.getUserPosts(userId)
      ]);
      setProfile(profileRes.data);
      setPosts(postsRes.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    ));
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="error">Profile not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {profile.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="profile-email">{profile.email}</p>
          {profile.bio && <p className="profile-bio">{profile.bio}</p>}
        </div>
      </div>

      <div className="profile-posts">
        <h2>{isOwnProfile ? 'Your Posts' : `${profile.name}'s Posts`}</h2>
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onDelete={handlePostDeleted}
              onUpdate={handlePostUpdated}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
