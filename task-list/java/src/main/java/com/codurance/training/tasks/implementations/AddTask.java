package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

import static java.lang.System.out;

public class AddTask implements IAddTask {
    public Id id;
    public AddTask(){
        this.id=new NextId();
    }
    public void addTask(String project, String description,Map<String, List<Task>> tasks) {
        List<Task> projectTasks = tasks.get(project);
        if (projectTasks == null) {
            out.printf("Could not find a project with the name \"%s\".", project);
            out.println();
            return;
        }
        projectTasks.add(new Task(id.nextId(), description, false));
    }
}
