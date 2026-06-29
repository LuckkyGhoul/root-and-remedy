package com.medify.nutridiet.repository;

import com.medify.nutridiet.model.DailyLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DailyLogRepository extends MongoRepository<DailyLog, String> {
    List<DailyLog> findByAssessmentIdOrderByLoggedAtAsc(String assessmentId);
}
