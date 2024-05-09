package learn.haring.data;

import learn.haring.data.mappers.SubmissionMapper;
import learn.haring.models.Submission;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class SubmissionJdbcTemplateRepository implements SubmissionRepository {

    private final JdbcTemplate jdbcTemplate;

    public SubmissionJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Submission add(Submission submission) {
        final String sql = "insert into submission "
                + "(submission_title, submission_description, submission_demo, submission_html, submission_css, elm_type_id, app_user_id) "
                + "values (?, ?, ?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, submission.getSubmissionTitle());
            ps.setString(2, submission.getSubmissionDescription());
            ps.setString(3, submission.getSubmissionDemo());
            ps.setString(4, submission.getSubmissionHtml());
            ps.setString(5, submission.getSubmissionCss());
            ps.setInt(6, submission.getElmType().getElmTypeId());
            ps.setInt(7, submission.getAppUser().getAppUserId());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        submission.setSubmissionId(keyHolder.getKey().intValue());
        return submission;

    }

    @Override
    public List<Submission> findAll() {
        final String sql = """
                            select
                                s.submission_id,
                                s.submission_title,
                                s.submission_description,
                                s.submission_demo,
                                s.submission_html,
                                s.submission_css,
                                et.elm_type_id,
                                et.elm_type_name,
                                au.app_user_id,
                                au.username,
                                au.password_hash,
                                au.enabled
                            from submission s
                            inner join elm_type et on s.elm_type_id = et.elm_type_id
                            inner join app_user au on s.app_user_id = au.app_user_id
                            """;
        return jdbcTemplate.query(sql, new SubmissionMapper());
    }

    @Override
    public Submission findById(int submissionId) {
        final String sql = """
                            select
                                submission_id,
                                submission_title,
                                submission_description,
                                submission_demo,
                                submission_html,
                                submission_css,
                                et.elm_type_id,
                                et.elm_type_name,
                                au.app_user_id,
                                au.username
                            from submission
                            inner join elm_type et on submission.elm_type_id = et.elm_type_id
                            inner join app_user au on submission.app_user_id = au.app_user_id
                            where submission.submission_id = ?
                            """;
        return jdbcTemplate.query(sql, new SubmissionMapper(), submissionId)
                .stream().findFirst().orElse(null);
    }

    @Override
    public List<Submission> findByAppUserId(int appUserId) {
        final String sql = """
                            select
                                submission_id,
                                submission_title,
                                submission_description,
                                submission_demo,
                                submission_html,
                                submission_css,
                                et.elm_type_id,
                                et.elm_type_name,
                                au.app_user_id,
                                au.username,
                                au.password_hash,
                                au.enabled
                            from submission
                            inner join elm_type et on submission.elm_type_id = et.elm_type_id
                            inner join app_user au on submission.app_user_id = au.app_user_id
                            where submission.app_user_id = ?
                            """;
        return jdbcTemplate.query(sql, new SubmissionMapper(), appUserId);
    }

    @Override
    public boolean update(Submission submission) {
        final String sql = "update submission set "
                + "submission_title = ?, "
                + "submission_description = ?, "
                + "submission_demo = ?, "
                + "submission_html = ?, "
                + "submission_css = ?, "
                + "elm_type_id = ?, "
                + "app_user_id = ? "
                + "where submission_id = ?";
        return jdbcTemplate.update(sql, submission.getSubmissionTitle(),
                submission.getSubmissionDescription(),
                submission.getSubmissionDemo(),
                submission.getSubmissionHtml(),
                submission.getSubmissionCss(),
                submission.getElmType().getElmTypeId(),
                submission.getAppUser().getAppUserId(),
                submission.getSubmissionId()) > 0;

    }

    @Override
    @Transactional
    public boolean deleteById(int submissionId) {
        jdbcTemplate.update("delete from comment where submission_id = ?", submissionId);
        return jdbcTemplate.update("delete from submission where submission_id = ?", submissionId) > 0;
    }
}
