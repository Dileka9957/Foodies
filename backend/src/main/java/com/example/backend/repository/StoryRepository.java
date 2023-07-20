package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Story;

public interface StoryRepository extends JpaRepository<Story,Integer>{

  
}
