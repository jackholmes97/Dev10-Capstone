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
                select comment_id, submission_id, app_user_id, comment_text
                    from comment
                where comment_id = ?;
                """;
        return jdbcTemplate.query(sql, new CommentMapper(), id)
                .stream().findFirst().orElse(null);
    }

    @Override
    public List<Comment> findBySubmissionId(int submissionId) {
        final String sql = """
        select c.comment_id, c.submission_id, c.app_user_id, c.comment_text, s.submission_id, s.submission_title, s.submission_description, s.submission_demo, s.submission_html, s.submission_css, e.elm_type_id, e.elm_type_name, a.app_user_id, a.username, a.password_hash, a.enabled
        from comment c
        join submission s on c.submission_id = s.submission_id
        join app_user a on c.app_user_id = a.app_user_id
        join elm_type e on s.elm_type_id = e.elm_type_id
        where c.submission_id = ?;
        """;
        return jdbcTemplate.query(sql, new CommentMapper(), submissionId);
    }
    @Override
    public List<Comment> findAll() {
        final String sql = "select comment_id, submission_id, app_user_id, comment_text from comment;";
        return jdbcTemplate.query(sql, new CommentMapper());
    }

    @Override
    public Comment add(Comment comment) {
        final String sql = """
                insert into comment (submission_id, app_user_id, comment_text)
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
