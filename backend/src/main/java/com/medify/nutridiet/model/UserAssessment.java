package com.medify.nutridiet.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "assessments")
public class UserAssessment {
    @Id
    private String id;
    private String userId; // linked user account id
    private String gender;
    private Integer age;
    private Double weight;
    private Double height;
    private List<String> selectedDiseases;
    private Integer cholesterol;
    private Integer d3;
    private Integer b12;
    private Double thyroid;
    private Long createdAt = System.currentTimeMillis();

    // Explicit Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getWeight() {
        return weight;
    }
    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getHeight() {
        return height;
    }
    public void setHeight(Double height) {
        this.height = height;
    }

    public List<String> getSelectedDiseases() {
        return selectedDiseases;
    }
    public void setSelectedDiseases(List<String> selectedDiseases) {
        this.selectedDiseases = selectedDiseases;
    }

    public Integer getCholesterol() {
        return cholesterol;
    }
    public void setCholesterol(Integer cholesterol) {
        this.cholesterol = cholesterol;
    }

    public Integer getD3() {
        return d3;
    }
    public void setD3(Integer d3) {
        this.d3 = d3;
    }

    public Integer getB12() {
        return b12;
    }
    public void setB12(Integer b12) {
        this.b12 = b12;
    }

    public Double getThyroid() {
        return thyroid;
    }
    public void setThyroid(Double thyroid) {
        this.thyroid = thyroid;
    }

    public Long getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
    }
}
