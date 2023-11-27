package com.Leta.DAO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.Leta.Model.Job;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Component
public class SearchImplementation  implements SearchRepository {

	@Autowired
	MongoClient mongoClient;
	@Autowired
	MongoConverter converter;
	
	@Override
	public List<Job> findByText(String text) {
		
		List<Job> job=new ArrayList<>();

		
		MongoDatabase database = mongoClient.getDatabase("JobApp");
		MongoCollection<Document> collection = database.getCollection("Jobs");

		AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
		    new Document("index", "default")
		            .append("text", 
		    new Document("query", text)
		                .append("path", Arrays.asList("profile", "description", "experience", "tech")))), 
		    new Document("$sort", 
		    new Document("experience", 1L)), 
		    new Document("$limit", 3L)));
		
		result.forEach(document->job.add(converter.read(Job.class, document)));
		return job;
	}

	

}
