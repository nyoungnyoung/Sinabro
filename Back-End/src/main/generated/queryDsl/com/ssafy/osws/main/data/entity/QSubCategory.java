package com.ssafy.osws.main.data.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSubCategory is a Querydsl query type for SubCategory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSubCategory extends EntityPathBase<SubCategory> {

    private static final long serialVersionUID = -511252375L;

    public static final QSubCategory subCategory = new QSubCategory("subCategory");

    public final NumberPath<Integer> categoryToSubCategory = createNumber("categoryToSubCategory", Integer.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> no = createNumber("no", Integer.class);

    public QSubCategory(String variable) {
        super(SubCategory.class, forVariable(variable));
    }

    public QSubCategory(Path<? extends SubCategory> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSubCategory(PathMetadata metadata) {
        super(SubCategory.class, metadata);
    }

}

