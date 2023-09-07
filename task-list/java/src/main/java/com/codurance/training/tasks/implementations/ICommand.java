package com.codurance.training.tasks.implementations;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

public interface ICommand {

    public  void execute(String commandLine, Map<String, List<Task>> tasks ) throws ParseException;
}
