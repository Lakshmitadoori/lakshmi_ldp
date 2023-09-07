package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

public class AddProjectTask {

    public IAddProject addProject;
    public IAddTask addTask;

    public AddProjectTask(){
        this.addProject= new AddProject();
        this.addTask=new AddTask();
    }
    public void add(String commandLine, Map<String, List<Task>> tasks) {
        String[] subcommandRest = commandLine.split(" ", 2);
        String subcommand = subcommandRest[0];
        if (subcommand.equals("project")) {
            addProject.addProject(subcommandRest[1],tasks);
        } else if (subcommand.equals("task")) {
            String[] projectTask = subcommandRest[1].split(" ", 2);
            addTask.addTask(projectTask[0], projectTask[1],tasks);
        }
    }
}
