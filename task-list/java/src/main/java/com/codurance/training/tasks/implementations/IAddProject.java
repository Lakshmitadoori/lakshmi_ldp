package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

public interface IAddProject {

    public void addProject(String name, Map<String, List<Task>> tasks);
}
