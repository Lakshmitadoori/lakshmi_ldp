package com.codurance.training.tasks.implementations;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class DeleteProject implements IDeleteTask {
    @Override
    public void deleteTask(String taskId, Map<String, List<Task>> tasks) {

        String numericString = taskId.replaceAll("\\D", "");

        int result = Integer.parseInt(numericString);
        for (List<Task> projectTasks : tasks.values()) {

            Iterator<Task> iterator = projectTasks.iterator();
            while (iterator.hasNext()) {
                Task task = iterator.next();
                if (task.getId() == result) {
                    iterator.remove();
                    return;
                }
            }
        }
        System.out.println("Task with ID " + taskId + " not found.");
    }
}
