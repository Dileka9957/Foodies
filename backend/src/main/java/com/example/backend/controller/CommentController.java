package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Comment;
import com.example.backend.service.CommentService;

@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
     private CommentService commentService;

    @PostMapping("/add")
    public String add(@RequestBody Comment comment){
        commentService.saveComment(comment);
        return "New Comment is added";
    }


    @GetMapping("/getAll")
    public List<Comment> list(){
      return commentService.getAllComments();
       
    }
    

    @DeleteMapping("/delete/{cid}")
    public String delete(@PathVariable int cid){
       commentService.deleteComment(cid);
       return "Comment with ID " + cid + " has been deleted";
    }

    @GetMapping("/get/{cid}")
    public Comment getCommentById(@PathVariable int cid) {
        return  commentService.getCommentById(cid);
    }

    @PutMapping("/update/{cid}")
    public Comment update(@PathVariable int cid, @RequestBody Comment comment){
        return  commentService.updateComment(cid, comment);
    }

}