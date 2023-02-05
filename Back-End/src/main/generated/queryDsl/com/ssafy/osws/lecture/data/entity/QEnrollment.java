package com.ssafy.osws.lecture.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QEnrollment is a Querydsl query type for Enrollment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QEnrollment extends EntityPathBase<Enrollment> {

    private static final long serialVersionUID = -403126110L;

    public static final QEnrollment enrollment = new QEnrollment("enrollment");

    public final NumberPath<Integer> lectureNo = createNumber("lectureNo", Integer.class);

    public final NumberPath<Integer> userNo = createNumber("userNo", Integer.class);

    public QEnrollment(String variable) {
        super(Enrollment.class, forVariable(variable));
    }

    public QEnrollment(Path<? extends Enrollment> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEnrollment(PathMetadata metadata) {
        super(Enrollment.class, metadata);
    }

}

