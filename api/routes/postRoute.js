import express from 'express';
import multer from 'multer';
import Post from '../models/postModel.js';
import { formatDistanceToNowStrict } from 'date-fns';

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Create a new post
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log("Upload");
    const { title, description } = req.body;
    const newPost = new Post({
      title,
      description,
      imagePath: req.file.path,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
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
    res.status(500).json({ error: 'Error fetching posts' });
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
