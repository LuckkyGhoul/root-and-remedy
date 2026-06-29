package com.medify.nutridiet.model;

import java.util.List;
import java.util.Map;

public class MLOptimizationResult {
    private String status;
    private List<String> optimizationLogs;
    private String directive;
    private Double confidence;
    private Map<String, Double> adjustments;

    // Explicit Getters and Setters
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public List<String> getOptimizationLogs() {
        return optimizationLogs;
    }
    public void setOptimizationLogs(List<String> optimizationLogs) {
        this.optimizationLogs = optimizationLogs;
    }

    public String getDirective() {
        return directive;
    }
    public void setDirective(String directive) {
        this.directive = directive;
    }

    public Double getConfidence() {
        return confidence;
    }
    public void setConfidence(Double confidence) {
        this.confidence = confidence;
    }

    public Map<String, Double> getAdjustments() {
        return adjustments;
    }
    public void setAdjustments(Map<String, Double> adjustments) {
        this.adjustments = adjustments;
    }
}
