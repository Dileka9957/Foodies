package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Story;

public interface StoryService {

    public Story saveStory(Story story);
    public Story getStoryById(int sid);
    public List<Story> getAllStories();
    public Story updateStory(int sid ,Story story);
    public void deleteStory(int sid);
}
