package learn.haring.models;

public class Comment {

    private int commentId;
    private String commentText;

    private Submission submission;

    private AppUser appUser;

    public Comment() { }

    public Comment(int commentId, String commentText, Submission submission, AppUser appUser) {
        this.commentId = commentId;
        this.commentText = commentText;
        this.submission = submission;
        this.appUser = appUser;
    }


    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public Submission getSubmission() {
        return submission;
    }

    public void setSubmission(Submission submission) {
        this.submission = submission;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
