import express from 'express';
import Post from '../models/postModel.js';
import { formatDistanceToNowStrict } from 'date-fns';
import { upload } from '../utils/upload.js';

const router = express.Router();


// Create a new post
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Upload successful');
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image upload failed' });
    }

    const newPost = new Post({
      title,
      description,
      imagePath: req.file.path, // Cloudinary URL
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    const LatestPost = posts.reverse().map(post => ({
      ...post._doc,
      agoTime: `${formatDistanceToNowStrict(new Date(post.createdAt))} ago`,
    }))
    res.json(LatestPost);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' , error: error.message });
  }
});

// Get a single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
});

// Update a post
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedData = { title, description };
    if (req.file) updatedData.imagePath = req.file.path;

    const post = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
});

export default router;
