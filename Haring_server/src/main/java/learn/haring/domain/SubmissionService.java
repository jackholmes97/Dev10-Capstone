package learn.haring.domain;

import learn.haring.data.SubmissionRepository;
import learn.haring.models.Submission;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    private final SubmissionRepository repository;

    public SubmissionService(SubmissionRepository repository) {
        this.repository = repository;
    }

    public List<Submission> findAll() {
        return repository.findAll();
    }

    public Submission findById(int submissionId) {
        return repository.findById(submissionId);
    }

    public List<Submission> findByAppUserId(int appUserId) {
        return repository.findByAppUserId(appUserId);
    }

    public Result<Submission> add(Submission submission) {
        Result<Submission> result = validate(submission);
        if (!result.isSuccess()) {
            return result;
        }

        if (submission.getSubmissionId() != 0) {
            result.addMessage("submissionId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        Submission newSubmission = repository.add(submission);
        result.setPayload(newSubmission);
        return result;
    }

    public Result<Submission> update(Submission submission) {
        Result<Submission> result = validate(submission);
        if (!result.isSuccess()) {
            return result;
        }

        if (submission.getSubmissionId() <= 0) {
            result.addMessage("submissionId must be set for `update` operation", ResultType.INVALID);
            return result;
        }
        Submission existing = repository.findById(submission.getSubmissionId());
        if (existing == null) {
            result.addMessage("submissionId must be valid for `update` operation", ResultType.INVALID);
            return result;
        }

        if (submission.getAppUser().getAppUserId() != existing.getAppUser().getAppUserId()) {
            result.addMessage("appUserId cannot be changed", ResultType.INVALID);
            return result;
        }

        if (submission.getElmType().getElmTypeId() != existing.getElmType().getElmTypeId()) {
            result.addMessage("elmTypeId cannot be changed", ResultType.INVALID);
            return result;
        }

        if (!repository.update(submission)) {
            result.addMessage("submissionId must be valid for `update` operation", ResultType.INVALID);
            return result;
        }

        result.setPayload(submission);

        return result;

    }

    public boolean deleteById(int submissionId) {
        return repository.deleteById(submissionId);
    }

    private Result<Submission> validate(Submission submission) {
        Result<Submission> result = new Result<>();
        if (submission == null) {
            result.addMessage("submission cannot be null", ResultType.INVALID);
            return result;
        }
        if (submission.getElmType() == null) {
            result.addMessage("elmType cannot be null", ResultType.INVALID);
            return result;
        }
        if (submission.getElmType().getElmTypeId() <= 0) {
            result.addMessage("elmTypeId must be set", ResultType.INVALID);
            return result;
        }
        if (submission.getAppUser() == null) {
            result.addMessage("appUser cannot be null", ResultType.INVALID);
            return result;
        }
        if (submission.getAppUser().getAppUserId() <= 0) {
            result.addMessage("appUserId must be set", ResultType.INVALID);
            return result;
        }
        return result;
    }
}
