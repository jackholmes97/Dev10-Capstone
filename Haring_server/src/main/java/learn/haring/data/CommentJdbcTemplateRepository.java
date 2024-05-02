package learn.haring.data;

import learn.haring.data.mappers.CommentMapper;
import learn.haring.models.Comment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class CommentJdbcTemplateRepository implements CommentRepository {

    private final JdbcTemplate jdbcTemplate;

    public CommentJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Comment findById(int id) {
        final String sql = """
                select comment_id, submission_id, user_id, comment_text
                    from comment
                where comment_id = ?;
                """;
        return jdbcTemplate.query(sql, new CommentMapper(), id)
                .stream().findFirst().orElse(null);
    }

    @Override
    public List<Comment> findBySubmissionId(int submissionId) {
        final String sql = """
                select comment_id, submission_id, user_id, comment_text
                from comment
                where submission_id = ?;
                """;
        return jdbcTemplate.query(sql, new CommentMapper(), submissionId);
    }

    @Override
    public List<Comment> findAll() {
        final String sql = "select comment_id, submission_id, user_id, comment_text from comment;";
        return jdbcTemplate.query(sql, new CommentMapper());
    }

    @Override
    public Comment add(Comment comment) {
        final String sql = """
                insert into comment (submission_id, user_id, comment_text)
                values (?, ?, ?);
                """;
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            var ps = connection.prepareStatement(sql, new String[] { "comment_id" });
            ps.setInt(1, comment.getSubmission().getSubmissionId());
            ps.setInt(2, comment.getAppUser().getAppUserId());
            ps.setString(3, comment.getCommentText());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        comment.setCommentId(keyHolder.getKey().intValue());
        return comment;

    }

    @Override
    public boolean deleteById(int commentId) {
        final String sql = "delete from comment where comment_id = ?;";
        return jdbcTemplate.update(sql, commentId) > 0;
    }


}
