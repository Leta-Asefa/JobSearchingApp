package com.Leta.DAO;

import java.util.List;

import org.springframework.stereotype.Component;

import com.Leta.Model.Job;

@Component
public interface SearchRepository {

	List<Job> findByText(String text);
}
