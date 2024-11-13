import { Request, Response } from "express";
import Blog from "../models/Blog";
import { error } from "console";

export const getBlog = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    // res.status(404).json({ message: (error as Error).message })
    if (error instanceof Error)
      res.status(404).json({ message: error.message });
    else res.status(404).json({ message: "An Unknown Error Occurred" });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body; // get the data from the requests
  try {
    const newBlog = await Blog.create({ title, content });
    res.status(201).json(newBlog);
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
    else res.status(500).json({ message: "An Unknown Error Occurred" });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedBlog)
      return res.status(404).json({ message: "Blog not found" });

    res.status(200).json(updatedBlog);
  } catch {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
    else res.status(500).json({ message: "An Unknown Error Occurred" });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog)
      return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "blog deleted" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
    else res.status(500).json({ message: "An Unknown Error Occurred" });
  }
};
