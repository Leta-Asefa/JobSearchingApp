package com.Leta.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Leta.Model.Job;
import com.Leta.Service.SearchService;

@RestController
//@RequestMapping("search")
public class JobSearch {
	
		@Autowired
		SearchService service;
		
	@CrossOrigin(origins ="http://127.0.0.1:5500" )
	@GetMapping("all")
	public List<com.Leta.Model.Job> all() {
		
		return service.getAll();
	}
	
	@CrossOrigin(origins ="http://127.0.0.1:5500" )
	@PostMapping("add")
	public String add(@RequestBody Job job) {
		
		service.add(job);
		return "posted";
	}
	
	@CrossOrigin(origins ="http://127.0.0.1:5500" )
	@GetMapping("all/{text}")
	public List<Job> search(@PathVariable String text) {
		
		return service.search(text);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
