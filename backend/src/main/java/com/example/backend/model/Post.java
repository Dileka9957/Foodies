package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int pid;

    private String username;
    private String foodname;
    private String description;
    private String imageurl;
    // private String imageURL2;
    // private String imageURL3;
    // private String imageURL4;


    public Post(int pid,String username,String foodname,String description ,String imageurl){
    super();
    this.pid = pid;
    this.username =username;
    this.description= description;
    this.imageurl=imageurl;
    // this.imageURL2=imageURL2;
    // this.imageURL3=imageURL3;
    // this.imageURL4=imageURL4;
    }

    
    public Post() {
    }


    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFoodname() {
        return foodname;
    }
    public void setFoodName(String foodname) {
        this.foodname = foodname;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImageurl() {
        return imageurl;
    }
    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }
    // public String getImageURL2() {
    //     return imageURL2;
    // }
    // public void setImageURL2(String imageURL2) {
    //     this.imageURL2 = imageURL2;
    // }
    // public String getImageURL3() {
    //     return imageURL3;
    // }
    // public void setImageURL3(String imageURL3) {
    //     this.imageURL3 = imageURL3;
    // }
    // public String getImageURL4() {
    //     return imageURL4;
    // }
    // public void setImageURL4(String imageURL4) {
    //     this.imageURL4 = imageURL4;
    // }
}
