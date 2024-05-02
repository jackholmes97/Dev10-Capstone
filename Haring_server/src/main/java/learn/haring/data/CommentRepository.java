package learn.haring.data;
import learn.haring.models.Comment;
import java.util.List;

public interface CommentRepository {
    List<Comment> findAll();
    List<Comment> findBySubmissionId(int submissionId);

    Comment findById(int commentId);

    Comment add(Comment comment);

    boolean deleteById(int commentId);
}
