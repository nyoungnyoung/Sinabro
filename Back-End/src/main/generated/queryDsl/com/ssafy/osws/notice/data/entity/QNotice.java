package com.ssafy.osws.notice.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QNotice is a Querydsl query type for Notice
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QNotice extends EntityPathBase<Notice> {

    private static final long serialVersionUID = 888020270L;

    public static final QNotice notice = new QNotice("notice");

    public final StringPath content = createString("content");

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final BooleanPath priority = createBoolean("priority");

    public final StringPath registeredDate = createString("registeredDate");

    public final StringPath subject = createString("subject");

    public QNotice(String variable) {
        super(Notice.class, forVariable(variable));
    }

    public QNotice(Path<? extends Notice> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNotice(PathMetadata metadata) {
        super(Notice.class, metadata);
    }

}

