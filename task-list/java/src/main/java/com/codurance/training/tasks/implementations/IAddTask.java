package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

public interface IAddTask {
    public void addTask(String project, String description, Map<String, List<Task>> tasks );
}
