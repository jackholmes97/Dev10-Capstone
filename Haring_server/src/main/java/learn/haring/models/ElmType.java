package learn.haring.models;

public class ElmType {
    private int elmTypeId;
    private String elmTypeName;

    public ElmType() { }

    public ElmType(int elmTypeId, String elmTypeName) {
        this.elmTypeId = elmTypeId;
        this.elmTypeName = elmTypeName;
    }

    public int getElmTypeId() {
        return elmTypeId;
    }

    public void setElmTypeId(int elmTypeId) {
        this.elmTypeId = elmTypeId;
    }

    public String getElmTypeName() {
        return elmTypeName;
    }

    public void setElmTypeName(String elmTypeName) {
        this.elmTypeName = elmTypeName;
    }
}
