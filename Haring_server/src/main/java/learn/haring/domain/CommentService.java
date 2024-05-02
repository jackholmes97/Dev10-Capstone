package learn.haring.domain;
import learn.haring.models.Comment;
import learn.haring.data.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository repository;

    public CommentService(CommentRepository repository) {
        this.repository = repository;
    }

    public List<Comment> findAll() {
        return repository.findAll();
    }

    public List<Comment> findBySubmissionId(int submissionId) {
        return repository.findBySubmissionId(submissionId);
    }

    public Comment findById(int comment) {
        return repository.findById(comment);
    }

    public Result<Comment> add(Comment comment) {
        Result<Comment> result = validate(comment);
        if (!result.isSuccess()) {
            return result;
        }

        if (comment.getCommentId() != 0) {
            result.addMessage("commentId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        Comment newComment = repository.add(comment);
        result.setPayload(newComment);
        return result;
    }

    public boolean deleteById(int comment) {
        return repository.deleteById(comment);
    }

    private Result<Comment> validate(Comment comment) {
        Result<Comment> result = new Result<>();
        if (comment == null || comment.getCommentText().isBlank()){
            result.addMessage("comment cannot be null or blank", ResultType.INVALID);
            return result;
        }
        if (comment.getSubmission().getSubmissionId() <= 0) {
            result.addMessage("submissionId must be set", ResultType.INVALID);
            return result;
        }
        return result;
    }
}
