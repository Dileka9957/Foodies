package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Post;

public interface PostRepository extends JpaRepository<Post ,Integer> {
    
}
