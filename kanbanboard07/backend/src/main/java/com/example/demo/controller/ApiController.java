package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

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
	public ResponseEntity<JsonResult> readToTask(@RequestParam(value = "cardNo", required = true, defaultValue = "") Long cardNo) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskRepository.findAll(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> createToTask(@RequestBody TaskVo taskVo) {
		taskRepository.insertTask(taskVo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskVo));
	}
	
	@PutMapping("/task")
	public ResponseEntity<JsonResult> updateToTask(@RequestBody TaskVo taskVo) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskRepository.updateTask(taskVo)));
	}
	
	@DeleteMapping("/task")
	public ResponseEntity<JsonResult> deleteToTask(@RequestBody TaskVo taskVo) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskRepository.deleteTask(taskVo)));
	}
	
}