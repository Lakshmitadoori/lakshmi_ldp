package com.codurance.training.tasks.implementations;

import java.util.List;
import java.util.Map;

public interface IUncheckProject {
    void uncheck(String idString, Map<String, List<Task>> tasks);
}