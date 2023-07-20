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

import com.example.backend.model.User;
import com.example.backend.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
     private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User is added";
    }

    @GetMapping("/get/{uid}")
    public User getUserById(@PathVariable int uid) {
        return userService.getUserById(uid);
    }

    @GetMapping("/getAll")
    public List<User> list(){
      return userService.getAllUsers();
       
    }

    @DeleteMapping("/delete/{uid}")
    public String delete(@PathVariable int uid){
       userService.deleteUser(uid);
       return "User with ID " + uid + " has been deleted";
    }

    
    @PutMapping("/update/{uid}")
    public User update(@PathVariable int uid, @RequestBody User user){
       return userService.updateUser(uid, user);
    }
 }
 