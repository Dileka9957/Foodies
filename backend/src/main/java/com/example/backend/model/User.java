package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String firstname;
    private String lastname ;
    private String email;
    private String mobile_no;
    private String gender;

    public User(int uid,String firstname,String lasttname,String address,String email,String mobile_no,String gender){
    super();
    this.uid=uid;
    this.firstname=lastname;
    this.lastname=lasttname;
    this.email=email;
    this.mobile_no=mobile_no;
    this.gender=gender;
    }


    public int getID() {
        return uid;
    }

    public void setId(int uid) {
        this.uid = uid;
    }

    public User() {
    }


    
    public String getGender() {
        return gender;
    }



    public void setGender(String gender) {
        this.gender = gender;
    }



    public String getFirstname() {
        return firstname;
    }


    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public String getLastname() {
        return lastname;
    }



    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getMobile_no() {
        return mobile_no;
    }


    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }


}
