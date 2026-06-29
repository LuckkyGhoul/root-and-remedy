package com.medify.nutridiet.controller;

import com.medify.nutridiet.model.UserAssessment;
import com.medify.nutridiet.repository.AssessmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/assessment")
@CrossOrigin(origins = "*")
public class AssessmentController {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @PostMapping
    public ResponseEntity<UserAssessment> createAssessment(@RequestBody UserAssessment assessment) {
        UserAssessment saved = assessmentRepository.save(assessment);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserAssessment> getAssessment(@PathVariable String id) {
        return assessmentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
