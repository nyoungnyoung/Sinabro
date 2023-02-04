package com.ssafy.osws.lecture.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLectureCategory is a Querydsl query type for LectureCategory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLectureCategory extends EntityPathBase<LectureCategory> {

    private static final long serialVersionUID = 1064975806L;

    public static final QLectureCategory lectureCategory = new QLectureCategory("lectureCategory");

    public final NumberPath<Integer> lectureToLectureCategory = createNumber("lectureToLectureCategory", Integer.class);

    public final StringPath subCategoryToLectureCategory = createString("subCategoryToLectureCategory");

    public QLectureCategory(String variable) {
        super(LectureCategory.class, forVariable(variable));
    }

    public QLectureCategory(Path<? extends LectureCategory> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLectureCategory(PathMetadata metadata) {
        super(LectureCategory.class, metadata);
    }

}

