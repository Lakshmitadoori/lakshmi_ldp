package com.codurance.training.tasks.implementations;

import static java.lang.System.out;

public class Help  implements IHelp {
    public void help() {
        out.println("Commands:");
        out.println("  show");
        out.println("  add project <project name>");
        out.println("  add task <project name> <task description>");
        out.println("  check <task ID>");
        out.println("  uncheck <task ID>");
        out.println("  delete <task ID>");
        out.println();
    }
}
