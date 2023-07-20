package com.example.backend.model;

// import java.security.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int CID;
    private int PID;
    private String comment;
    // private Timestamp time;

    public Comment(int CID,int PID,String comment){

        super();
        this.CID = CID;
        this.PID = PID;
        this.comment = comment;
        // this.time =time;
    }
    
    public Comment() {
    }

    public int getPID() {
        return PID;
    }

    public void setPID(int pID) {
        PID = pID;
    }

    public int getCID() {
        return CID;
    }
    public void setCID(int cID) {
        CID = cID;
    }

    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    // public Timestamp getTime() {
    //     return time;
    // }
    // public void setTime(Timestamp time) {
    //     this.time = time;
    // }

}
