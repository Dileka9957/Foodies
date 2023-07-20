package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Comment;
import com.example.backend.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

@Autowired
private CommentRepository commentRepository;

@Override
public Comment saveComment(Comment comment) {
    return commentRepository.save(comment);
}

@Override
public List<Comment> getAllComments() {
    return commentRepository.findAll();
}

@Override
public void deleteComment(int cid) {
    commentRepository.deleteById(cid);
    
}

@Override
public Comment getCommentById(int cid) {
    return commentRepository.findById(cid).orElse(null);
}

@Override
public Comment updateComment(int cid, Comment comment) {
    Comment existingComment = commentRepository.findById(cid).orElse(null);
    if (existingComment != null) {
        existingComment.setComment(comment.getComment());
        return commentRepository.save(existingComment);
    }
    return null;
}

  
}
