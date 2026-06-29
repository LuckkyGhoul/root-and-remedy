package com.medify.nutridiet.controller;

import com.medify.nutridiet.model.DailyLog;
import com.medify.nutridiet.model.MLOptimizationResult;
import com.medify.nutridiet.model.UserAssessment;
import com.medify.nutridiet.repository.AssessmentRepository;
import com.medify.nutridiet.repository.DailyLogRepository;
import com.medify.nutridiet.service.MLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProgressController {

    @Autowired
    private DailyLogRepository dailyLogRepository;

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private MLService mlService;

    @PostMapping("/logs")
    public ResponseEntity<DailyLog> addLog(@RequestBody DailyLog log) {
        DailyLog saved = dailyLogRepository.save(log);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/logs/{assessmentId}")
    public ResponseEntity<List<DailyLog>> getLogs(@PathVariable String assessmentId) {
        List<DailyLog> logs = dailyLogRepository.findByAssessmentIdOrderByLoggedAtAsc(assessmentId);
        return ResponseEntity.ok(logs);
    }

    @PostMapping("/optimize/{assessmentId}")
    public ResponseEntity<MLOptimizationResult> runOptimization(@PathVariable String assessmentId) {
        UserAssessment assessment = assessmentRepository.findById(assessmentId).orElse(null);
        if (assessment == null) {
            return ResponseEntity.notFound().build();
        }
        
        List<DailyLog> logs = dailyLogRepository.findByAssessmentIdOrderByLoggedAtAsc(assessmentId);
        MLOptimizationResult result = mlService.optimize(assessment, logs);
        return ResponseEntity.ok(result);
    }
}
