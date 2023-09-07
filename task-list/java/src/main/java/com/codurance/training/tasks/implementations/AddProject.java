package com.codurance.training.tasks.implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class AddProject implements IAddProject {

    public void addProject(String name, Map<String, List<Task>> tasks) {
        tasks.put(name, new ArrayList<Task>());
    }
}
