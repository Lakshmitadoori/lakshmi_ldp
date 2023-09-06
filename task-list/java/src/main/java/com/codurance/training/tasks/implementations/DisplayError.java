package com.codurance.training.tasks.implementations;

import static java.lang.System.out;

public class DisplayError implements IDisplayError {

    public void error(String command) {
        out.printf("I don't know what the command \"%s\" is.", command);
        out.println();
    }
}
