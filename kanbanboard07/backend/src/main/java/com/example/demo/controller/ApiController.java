package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> readToCard() {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readToTask() {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskRepository.findAll()));
	}
}