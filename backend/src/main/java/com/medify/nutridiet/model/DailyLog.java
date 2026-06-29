package com.medify.nutridiet.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "daily_logs")
public class DailyLog {
    @Id
    private String id;
    private String assessmentId;
    private String userId; // linked user account id
    private String date;
    private Double weight;
    private Integer energy;
    private Integer adherence;
    private String symptoms;
    private Long loggedAt = System.currentTimeMillis();

    // Explicit Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getAssessmentId() {
        return assessmentId;
    }
    public void setAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
    }

    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public Double getWeight() {
        return weight;
    }
    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getEnergy() {
        return energy;
    }
    public void setEnergy(Integer energy) {
        this.energy = energy;
    }

    public Integer getAdherence() {
        return adherence;
    }
    public void setAdherence(Integer adherence) {
        this.adherence = adherence;
    }

    public String getSymptoms() {
        return symptoms;
    }
    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public Long getLoggedAt() {
        return loggedAt;
    }
    public void setLoggedAt(Long loggedAt) {
        this.loggedAt = loggedAt;
    }
}
