package com.codurance.training.tasks.implementations;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class TodayTasks implements ITodayTasks {
    @Override
    public void showTodayDueTasks(Map<String, List<Task>> tasks) {
        Date today = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String todayDate = sdf.format(today);

        for (List<Task> projectTasks : tasks.values()) {

            for (Task task : projectTasks) {
                Date deadline = task.getDeadline();
                if (deadline != null && sdf.format(deadline).equals(todayDate)) {

                    System.out.println("Task ID: " + task.getId());
                    System.out.println("Description: " + task.getDescription());
                    System.out.println("Deadline: " + sdf.format(deadline));
                    System.out.println();
                }
            }
        }
    }
}
