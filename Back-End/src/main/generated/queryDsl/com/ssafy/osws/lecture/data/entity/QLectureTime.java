package com.ssafy.osws.lecture.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLectureTime is a Querydsl query type for LectureTime
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLectureTime extends EntityPathBase<LectureTime> {

    private static final long serialVersionUID = -804506739L;

    public static final QLectureTime lectureTime = new QLectureTime("lectureTime");

    public final NumberPath<Integer> day = createNumber("day", Integer.class);

    public final NumberPath<Integer> lectureNo = createNumber("lectureNo", Integer.class);

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final DateTimePath<java.sql.Timestamp> runTime = createDateTime("runTime", java.sql.Timestamp.class);

    public final DateTimePath<java.sql.Timestamp> startTime = createDateTime("startTime", java.sql.Timestamp.class);

    public QLectureTime(String variable) {
        super(LectureTime.class, forVariable(variable));
    }

    public QLectureTime(Path<? extends LectureTime> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLectureTime(PathMetadata metadata) {
        super(LectureTime.class, metadata);
    }

}

