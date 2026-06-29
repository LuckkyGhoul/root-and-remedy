package com.medify.nutridiet.repository;

import com.medify.nutridiet.model.UserAssessment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface AssessmentRepository extends MongoRepository<UserAssessment, String> {
    Optional<UserAssessment> findFirstByUserIdOrderByCreatedAtDesc(String userId);
}
