package com.codurance.training.tasks.implementations;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class ExecuteProject implements ICommand {

    public IShow show;
    public AddProjectTask add;
    public ICheckProject check;
    public IUncheckProject uncheck;
    public IHelp help;
    public IDisplayError displayError;
    public IDeleteTask delete;
    public IDeadline deadline;
    public ITodayTasks todayDueTasks;
    public ExecuteProject(){
       this.show=  new ShowProject();
       this.add=new AddProjectTask();
       this.check=new CheckProject();
       this.uncheck=new UncheckProject();
       this.help=new Help();
        this.displayError = new DisplayError();
        this.delete=new DeleteProject();
       this.todayDueTasks=new TodayTasks();
    }


    public  void execute(String commandLine, Map<String, List<Task>> tasks ) throws ParseException {
        String[] commandRest = commandLine.split(" ", 2);
        String command = commandRest[0];
        switch (command) {
            case "show":
                show.show(tasks);
                break;
            case "add":
                add.add(commandRest[1],tasks);
                break;
            case "check":
                check.check(commandRest[1],tasks);
                break;
            case "uncheck":
                uncheck.uncheck(commandRest[1],tasks);
                break;
            case "delete":
                delete.deleteTask(commandRest[1],tasks);
                break;
            case "deadline":
                String[] commandRe = commandRest[1].split(" ", 2);
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                Date deadlineDate = sdf.parse(commandRe[1]);
                deadline.setDeadline(commandRe[0], deadlineDate, tasks);
                break;
            case "today":
                todayDueTasks.showTodayDueTasks(tasks);
                break;
            case "view":
                String viewCommand = commandRest[1];
                switch (viewCommand) {
                    case "by project":
                        show.show(tasks);
                        break;
                    default:
                        displayError.error(command);
                        break;
                }
                break;
            case "help":
                help.help();
                break;
            default:
                displayError.error(command);
                break;
        }

    }

}
