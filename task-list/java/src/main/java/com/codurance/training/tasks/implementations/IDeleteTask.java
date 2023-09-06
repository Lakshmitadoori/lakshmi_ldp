package com.codurance.training.tasks.implementations;


import java.util.List;
import java.util.Map;

public interface IDeleteTask {
    public void deleteTask(String id, Map<String, List<Task>> tasks);
}
