package com.Leta.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
@Document(collection  = "Jobs")
public class Job {

	@Id
	String id;
	String profile;
	String description;
	String experience;
	String tech[];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
