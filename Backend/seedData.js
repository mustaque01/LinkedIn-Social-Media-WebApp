const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Post Schema
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  image: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

const sampleUsers = [
  {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    password: 'password123',
    bio: 'Software Engineer at TCS | React & Node.js Developer'
  },
  {
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    password: 'password123',
    bio: 'Full Stack Developer | MERN Stack Enthusiast'
  },
  {
    name: 'Anjali Patel',
    email: 'anjali.patel@example.com',
    password: 'password123',
    bio: 'UI/UX Designer | Creating beautiful digital experiences'
  },
  {
    name: 'Arjun Singh',
    email: 'arjun.singh@example.com',
    password: 'password123',
    bio: 'Data Scientist at Infosys | AI/ML Enthusiast'
  },
  {
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    password: 'password123',
    bio: 'Product Manager | Tech Innovator'
  }
];

const samplePosts = [
  {
    content: "🎉 Excited to announce that I've joined TCS as a Senior Software Engineer! Looking forward to working with amazing teams on cutting-edge projects. #NewBeginnings #TCS #SoftwareEngineering",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'
  },
  {
    content: "Just completed a React + Node.js project! 🚀\n\nBuilt a full-stack e-commerce application with:\n✅ JWT Authentication\n✅ Payment Gateway Integration\n✅ Real-time Notifications\n\nAlways learning, always building! 💪\n\n#WebDevelopment #ReactJS #NodeJS #MERN",
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800'
  },
  {
    content: "Design is not just what it looks like. Design is how it works! ✨\n\nSharing my latest UI design for a mobile banking app. Would love to hear your thoughts! 🎨\n\n#UIUXDesign #ProductDesign #MobileApp",
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800'
  },
  {
    content: "Machine Learning is transforming the world! 🤖\n\nJust published my research paper on AI-powered recommendation systems. The possibilities are endless!\n\nExcited to see how AI will shape our future. What are your thoughts on AI ethics?\n\n#MachineLearning #AI #DataScience",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
  },
  {
    content: "Product Management tip of the day 💡\n\nAlways put your users first! Understanding their pain points is the key to building successful products.\n\nWhat's your biggest product management challenge? Let's discuss!\n\n#ProductManagement #Tech #Startups",
    image: ''
  },
  {
    content: "Celebrating 1000+ connections! 🎊\n\nThank you to this amazing community for all the support and learning opportunities. Let's continue growing together!\n\n#Networking #ProfessionalGrowth #LinkedIn",
    image: ''
  },
  {
    content: "Weekend coding session! ☕💻\n\nWorking on a new MERN stack project - A social media platform for developers. Features include:\n- Real-time chat\n- Code sharing\n- Project collaboration\n\nStay tuned for updates! 🚀\n\n#Coding #WebDev #WeekendVibes",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
  },
  {
    content: "Just attended an amazing tech conference in Bangalore! 🎤\n\nKey takeaways:\n1. Cloud computing is the future\n2. DevOps is essential\n3. Never stop learning!\n\nNetworked with incredible people from across India. #TechConference #Bangalore #Networking",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  }
];

async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});
    console.log('Cleared existing data');

    // Hash passwords and create users
    const users = [];
    for (let userData of sampleUsers) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      
      const user = await User.create({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        bio: userData.bio,
        profileImage: ''
      });
      users.push(user);
      console.log(`Created user: ${user.name}`);
    }

    // Create posts with random users
    for (let i = 0; i < samplePosts.length; i++) {
      const randomUser = users[i % users.length];
      const post = await Post.create({
        user: randomUser._id,
        content: samplePosts[i].content,
        image: samplePosts[i].image,
        likes: [],
        comments: []
      });
      console.log(`Created post by ${randomUser.name}`);
    }

    // Add some random likes and comments
    const posts = await Post.find();
    
    for (let post of posts) {
      // Add random likes (1-3 likes per post)
      const numLikes = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numLikes; i++) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        if (!post.likes.includes(randomUser._id)) {
          post.likes.push(randomUser._id);
        }
      }

      // Add 1-2 comments per post
      const numComments = Math.floor(Math.random() * 2) + 1;
      const comments = [
        'Great post! 👍',
        'Very informative, thanks for sharing!',
        'Congratulations! Well deserved 🎉',
        'This is amazing! Keep it up 🚀',
        'Totally agree with this!',
        'Inspiring! 💪',
        'Looking forward to seeing more updates!',
        'Excellent work! 👏'
      ];

      for (let i = 0; i < numComments; i++) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        post.comments.push({
          user: randomUser._id,
          text: randomComment
        });
      }

      await post.save();
    }

    console.log('\n✅ Database seeded successfully!');
    console.log(`Created ${users.length} users and ${posts.length} posts`);
    console.log('\nSample credentials:');
    sampleUsers.forEach(user => {
      console.log(`Email: ${user.email}, Password: password123`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
