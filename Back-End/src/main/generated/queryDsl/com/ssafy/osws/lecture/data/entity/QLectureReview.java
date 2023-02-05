package com.ssafy.osws.lecture.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLectureReview is a Querydsl query type for LectureReview
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLectureReview extends EntityPathBase<LectureReview> {

    private static final long serialVersionUID = -97540072L;

    public static final QLectureReview lectureReview = new QLectureReview("lectureReview");

    public final StringPath content = createString("content");

    public final NumberPath<Integer> lectureNo = createNumber("lectureNo", Integer.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final NumberPath<Integer> starPoint = createNumber("starPoint", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> time = createDateTime("time", java.time.LocalDateTime.class);

    public QLectureReview(String variable) {
        super(LectureReview.class, forVariable(variable));
    }

    public QLectureReview(Path<? extends LectureReview> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLectureReview(PathMetadata metadata) {
        super(LectureReview.class, metadata);
    }

}

