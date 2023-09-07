package com.codurance.training.tasks.implementations;

public class NextId implements Id {

    private long nextId=0;
    @Override
    public long nextId() {
        return ++nextId;
    }
}
