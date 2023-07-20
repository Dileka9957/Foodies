package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

@Autowired
private UserRepository userRepository;

@Override
public User saveUser(User user) {
     return userRepository.save(user);    
}

@Override
public List<User> getAllUsers() {
     return userRepository.findAll();
}

@Override
public void deleteUser(int uid) {
     userRepository.deleteById(uid);
     
}

@Override
public User updateUser(int uid, User user) {
     User existingUser = userRepository.findById(uid).orElse(null);
     if (existingUser != null) {
        existingUser.setFirstname(user.getFirstname());
        existingUser.setLastname(user.getLastname());
        existingUser.setGender(user.getGender());
        existingUser.setEmail(user.getEmail());
        existingUser.setMobile_no(user.getMobile_no());
        return userRepository.save(existingUser);
     }
     return null;
     
}

@Override
public User getUserById(int uid) {
     return userRepository.findById(uid).orElse(null);
}

}




