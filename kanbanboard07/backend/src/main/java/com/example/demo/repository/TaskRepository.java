package com.example.demo.repository;

import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll(Long cardNo) {
		return sqlSession.selectList("task.findAll", cardNo);
	}
	
	public boolean insertTask(TaskVo taskVo) {
		return sqlSession.insert("task.insertTask", taskVo) == 1;
	}
	
	public boolean updateTask(TaskVo taskVo) {
		return sqlSession.update("task.updateTask", taskVo) == 1; 
	}
	
	public boolean deleteTask(TaskVo taskVo) {
		return sqlSession.delete("task.deleteTask", taskVo) == 1;
	}
	
}
