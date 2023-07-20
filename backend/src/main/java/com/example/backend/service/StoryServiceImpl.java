package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Story;
import com.example.backend.repository.StoryRepository;

@Service
public class StoryServiceImpl implements StoryService  {

@Autowired
private StoryRepository storyRepository;

@Override
public Story saveStory(Story story) {
    return storyRepository.save(story); 
}

@Override
public List<Story> getAllStories() {
    return storyRepository.findAll();
}

@Override
public void deleteStory(int sid) {
    storyRepository.deleteById(sid);
    
}

@Override
public Story getStoryById(int sid) {
    return storyRepository.findById(sid).orElse(null);
}

@Override
public Story updateStory(int sid, Story story) {
    Story existingStory = storyRepository.findById(sid).orElse(null);
    if (existingStory != null) {
    //    existingStory.setSid(story.getSid());
    //    existingStory.setUid(story.getUid());
       existingStory.setUsername(story.getUsername());
       existingStory.setCaption(story.getCaption());
       existingStory.setImgurl(story.getImgurl());
       return storyRepository.save(existingStory);
    }
    return null;
}


    
}
