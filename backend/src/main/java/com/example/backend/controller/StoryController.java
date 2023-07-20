 package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Story;
import com.example.backend.service.StoryService;

@CrossOrigin
@RestController
@RequestMapping("/story")
public class StoryController {
    @Autowired
     private StoryService storyService;

    @PostMapping("/add")
    public String add(@RequestBody Story story){
        storyService.saveStory(story);
        return "New Story is created";
    }

    @GetMapping("/get/{sid}")
    public Story getStoryById(@PathVariable int sid) {
        return storyService.getStoryById(sid);
    }

    @GetMapping("/getAll")
    public List<Story> list(){
      return storyService.getAllStories();   
    }

    @DeleteMapping("/delete/{sid}")
    public String delete(@PathVariable int sid){
       storyService.deleteStory(sid);
       return "Story with ID " + sid + " has been deleted";
    }

    
    @PutMapping("/update/{sid}")
    public Story update(@PathVariable int sid, @RequestBody Story story){
       return storyService.updateStory(sid, story);
    }
 }