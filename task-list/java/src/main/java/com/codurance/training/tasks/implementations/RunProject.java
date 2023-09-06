package com.codurance.training.tasks.implementations;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

public class RunProject {

    public ICommand ICommand;
    public RunProject(){
        this.ICommand =new ExecuteProject();
    }
    public void run(PrintWriter out, BufferedReader in, String QUIT, Map<String, List<Task>> tasks) throws ParseException {
        while (true) {
            out.print("> ");
            out.flush();
            String command;
            try {
                command = in.readLine();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            if (command.equals(QUIT)) {
                break;
            }
            ICommand.execute(command,tasks);
        }
    }
}
