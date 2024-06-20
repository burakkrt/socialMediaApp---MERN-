import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find().sort({ _id: -1 });
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const { title, message, creator } = post;

  try {
    const existingPost = await PostMessage.findOne({ title, message, creator });

    if (existingPost) {
      return res
        .status(409)
        .json({ message: "A data of the same value is already registered." });
    }

    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("Post bulunamadı.");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("Post bulunamadı.");
  }

  const deletePost = await PostMessage.findByIdAndDelete(_id, { new: true });

  res.status(200).json(deletePost);
};
