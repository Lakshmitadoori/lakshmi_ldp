package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

import static java.lang.System.out;

public class ShowProject implements IShow {
    public void show(Map<String, List<Task>> tasks) {
        for (Map.Entry<String, List<Task>> project : tasks.entrySet()) {
            out.println(project.getKey());
            for (Task task : project.getValue()) {
                out.printf("    [%c] %d: %s%n", (task.isDone() ? 'x' : ' '), task.getId(), task.getDescription());
            }
            out.println();
        }
    }
}
