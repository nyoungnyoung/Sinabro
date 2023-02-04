package com.ssafy.osws.notice.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QAttachment is a Querydsl query type for Attachment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAttachment extends EntityPathBase<Attachment> {

    private static final long serialVersionUID = 2145830009L;

    public static final QAttachment attachment = new QAttachment("attachment");

    public final StringPath extension = createString("extension");

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public final NumberPath<Integer> noticeNo = createNumber("noticeNo", Integer.class);

    public final StringPath originalName = createString("originalName");

    public final StringPath savedName = createString("savedName");

    public QAttachment(String variable) {
        super(Attachment.class, forVariable(variable));
    }

    public QAttachment(Path<? extends Attachment> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAttachment(PathMetadata metadata) {
        super(Attachment.class, metadata);
    }

}

