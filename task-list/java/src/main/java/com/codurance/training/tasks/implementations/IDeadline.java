package com.codurance.training.tasks.implementations;



import java.util.Date;
import java.util.List;
import java.util.Map;

public interface IDeadline {

    public void setDeadline(String taskId, Date deadline, Map<String, List<Task>> tasks);
}
