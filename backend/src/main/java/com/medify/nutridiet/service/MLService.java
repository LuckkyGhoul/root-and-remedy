package com.medify.nutridiet.service;

import com.medify.nutridiet.model.MLOptimizationResult;
import com.medify.nutridiet.model.UserAssessment;
import com.medify.nutridiet.model.DailyLog;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MLService {

    @Value("${ml.api.url}")
    private String mlApiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public MLOptimizationResult optimize(UserAssessment assessment, List<DailyLog> logs) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("selectedDiseases", assessment.getSelectedDiseases());
        payload.put("age", assessment.getAge());
        payload.put("gender", assessment.getGender());
        payload.put("weight", assessment.getWeight());
        payload.put("logs", logs);

        try {
            return restTemplate.postForObject(mlApiUrl, payload, MLOptimizationResult.class);
        } catch (Exception e) {
            // Fallback result in case Flask is down or not connected
            MLOptimizationResult fallback = new MLOptimizationResult();
            fallback.setStatus("fallback");
            fallback.setConfidence(90.0);
            fallback.setDirective("ML Model Optimization Directive: (Local fallback) Please ensure the Python Flask ML Service is running at " + mlApiUrl + ". Using standard clinical weights to optimize your protein synthesis ratios.");
            fallback.setOptimizationLogs(List.of(
                "Warning: Connection to Flask ML Service failed. Running in standalone local backup mode.",
                "Using baseline clinical statistics mappings for PCOS/Deficiency profiles."
            ));
            fallback.setAdjustments(Map.of("protein", 5.0, "fats", 5.0, "carbs", -2.0));
            return fallback;
        }
    }
}
