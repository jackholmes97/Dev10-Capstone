package learn.haring.models;

public class Submission {
    private int submissionId;
    private String submissionTitle;
    private String submissionDescription;
    private String submissionDemo;
    private String submissionHtml;
    private String submissionCss;
    private ElmType elmType;
    private AppUser appUser;

    public Submission() { }

    public Submission(int submissionId, String submissionTitle, String submissionDescription, String submissionDemo, String submissionHtml, String submissionCss, ElmType elmType, AppUser appUser) {
        this.submissionId = submissionId;
        this.submissionTitle = submissionTitle;
        this.submissionDescription = submissionDescription;
        this.submissionDemo = submissionDemo;
        this.submissionHtml = submissionHtml;
        this.submissionCss = submissionCss;
        this.elmType = elmType;
        this.appUser = appUser;
    }


    public int getSubmissionId() {
        return submissionId;
    }

    public void setSubmissionId(int submissionId) {
        this.submissionId = submissionId;
    }

    public String getSubmissionTitle() {
        return submissionTitle;
    }

    public void setSubmissionTitle(String submissionTitle) {
        this.submissionTitle = submissionTitle;
    }

    public String getSubmissionDescription() {
        return submissionDescription;
    }

    public void setSubmissionDescription(String submissionDescription) {
        this.submissionDescription = submissionDescription;
    }

    public String getSubmissionDemo() {
        return submissionDemo;
    }

    public void setSubmissionDemo(String submissionDemo) {
        this.submissionDemo = submissionDemo;
    }

    public String getSubmissionHtml() {
        return submissionHtml;
    }

    public void setSubmissionHtml(String submissionHtml) {
        this.submissionHtml = submissionHtml;
    }

    public String getSubmissionCss() {
        return submissionCss;
    }

    public void setSubmissionCss(String submissionCss) {
        this.submissionCss = submissionCss;
    }

    public ElmType getElmType() {
        return elmType;
    }

    public void setElmType(ElmType elmType) {
        this.elmType = elmType;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
