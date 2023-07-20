package com.example.backend.service;

import java.util.List;

import com.example.backend.model.User;

public interface UserService{

   public User saveUser(User user);
   public User getUserById(int uid);
   public List<User> getAllUsers();
   public void deleteUser(int uid);
   public User updateUser(int uid ,User user);

   
}
