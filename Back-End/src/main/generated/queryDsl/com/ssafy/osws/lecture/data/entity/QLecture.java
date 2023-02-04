package com.ssafy.osws.lecture.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLecture is a Querydsl query type for Lecture
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLecture extends EntityPathBase<Lecture> {

    private static final long serialVersionUID = 1330887840L;

    public static final QLecture lecture = new QLecture("lecture");

    public final StringPath content = createString("content");

    public final DateTimePath<java.util.Date> endDate = createDateTime("endDate", java.util.Date.class);

    public final NumberPath<Integer> maxOccupancy = createNumber("maxOccupancy", Integer.class);

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final StringPath originalName = createString("originalName");

    public final StringPath savedName = createString("savedName");

    public final DateTimePath<java.util.Date> startDate = createDateTime("startDate", java.util.Date.class);

    public final StringPath subject = createString("subject");

    public final NumberPath<Integer> teacherToLecture = createNumber("teacherToLecture", Integer.class);

    public QLecture(String variable) {
        super(Lecture.class, forVariable(variable));
    }

    public QLecture(Path<? extends Lecture> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLecture(PathMetadata metadata) {
        super(Lecture.class, metadata);
    }

}

