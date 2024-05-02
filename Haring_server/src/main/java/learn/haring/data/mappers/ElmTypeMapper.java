package learn.haring.data.mappers;

import learn.haring.models.ElmType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ElmTypeMapper implements RowMapper<ElmType> {
    @Override
    public ElmType mapRow(ResultSet resultSet, int i) throws SQLException {
        ElmType elmType = new ElmType();
        elmType.setElmTypeId(resultSet.getInt("elm_type_id"));
        elmType.setElmTypeName(resultSet.getString("elm_type_name"));
        return elmType;
    }
}
