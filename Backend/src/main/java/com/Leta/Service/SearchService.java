package com.Leta.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Leta.DAO.SearchDAO;
import com.Leta.DAO.SearchRepository;
import com.Leta.Model.Job;

@Service
public class SearchService {
	
	@Autowired
	SearchDAO dao;
	@Autowired
	SearchRepository repo;

	public List<com.Leta.Model.Job> getAll() {
		
		return dao.findAll();
	}

	public void add(Job job) {
		
		dao.save(job);
	}

	public List<Job> search(String text) {
		return repo.findByText(text);
	}

	

}
