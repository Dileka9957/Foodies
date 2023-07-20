package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService {

@Autowired
private PostRepository postRepository;

@Override
public Post savePost(Post post) {   
    return postRepository.save(post);
}

@Override
public List<Post> getAllPosts() {
    return postRepository.findAll();
}

@Override
public void deletePost(int pid) {
    postRepository.deleteById(pid);
    
}

@Override
public Post getPostById(int pid) {
    return postRepository.findById(pid).orElse(null);
}

@Override
public Post updatePost(int pid, Post post) {
    Post existingPost = postRepository.findById(pid).orElse(null);
    if (existingPost != null) {
        existingPost.setUsername(post.getUsername());
        existingPost.setFoodName(post.getFoodname());
        existingPost.setDescription(post.getDescription());
        existingPost.setImageurl(post.getImageurl());
       return postRepository.save(existingPost);
    }
    return null;
}


    
}