package com.Leta.DAO;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.Leta.Model.Job;

public interface SearchDAO extends MongoRepository<Job, String>{

	

}
