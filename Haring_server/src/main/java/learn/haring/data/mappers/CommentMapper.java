package learn.haring.data.mappers;
import learn.haring.models.AppUser;
import learn.haring.models.Comment;
import learn.haring.models.Submission;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class CommentMapper implements RowMapper<Comment> {
    @Override
    public Comment mapRow(ResultSet resultSet, int i) throws SQLException {
        Comment comment = new Comment();
        comment.setCommentId(resultSet.getInt("comment_id"));
        comment.setCommentText(resultSet.getString("comment_text"));

        SubmissionMapper submissionMapper = new SubmissionMapper();
        Submission submission = submissionMapper.mapRow(resultSet, i);
        comment.setSubmission(submission);

        AppUserMapper appUserMapper = new AppUserMapper(List.of("MEMBER", "ADMIN"));
        AppUser appUser = appUserMapper.mapRow(resultSet, i);
        comment.setAppUser(appUser);

        return comment;
    }
}
