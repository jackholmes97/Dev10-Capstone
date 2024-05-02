package learn.haring.data;

import learn.haring.models.Submission;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface SubmissionRepository {

    //CREATE
    Submission add(Submission submission);

    //READ
    List<Submission> findAll();

    Submission findById(int submissionId);

    List<Submission> findByAppUserId(int appUserId);

    //UPDATE
    boolean update(Submission submission);

    //DELETE
    @Transactional
    boolean deleteById(int submissionId);
}
