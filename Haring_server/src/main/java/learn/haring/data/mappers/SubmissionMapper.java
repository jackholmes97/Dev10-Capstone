package learn.haring.data.mappers;

import learn.haring.models.AppUser;
import learn.haring.models.ElmType;
import learn.haring.models.Submission;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class SubmissionMapper implements RowMapper<Submission> {
    @Override
    public Submission mapRow(ResultSet resultSet, int i) throws SQLException {
        Submission submission = new Submission();
        submission.setSubmissionId(resultSet.getInt("submission_id"));
        submission.setSubmissionTitle(resultSet.getString("submission_title"));
        submission.setSubmissionDescription(resultSet.getString("submission_description"));
        submission.setSubmissionDemo(resultSet.getString("submission_demo"));
        submission.setSubmissionHtml(resultSet.getString("submission_html"));
        submission.setSubmissionCss(resultSet.getString("submission_css"));

        ElmTypeMapper elmTypeMapper = new ElmTypeMapper();
        ElmType elmType = elmTypeMapper.mapRow(resultSet, i);
        submission.setElmType(elmType);

        AppUserMapper appUserMapper = new AppUserMapper(List.of("MEMBER", "ADMIN"));
        AppUser appUser = appUserMapper.mapRow(resultSet, i);
        submission.setAppUser(appUser);

        return submission;
    }
}
