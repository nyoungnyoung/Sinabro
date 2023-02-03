package com.ssafy.osws.main.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="sub_category")
public class SubCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="category_to_sub_category", nullable=false)
	private int categoryToSubCategory;

	@Builder
	public SubCategory(int no, String name, int categoryToSubCategory) {
		this.no = no;
		this.name = name;
		this.categoryToSubCategory = categoryToSubCategory;
	} 
	
}