package tddmicroexercises.telemetrysystem;

import java.util.Random;

public class TelemetryStatus implements ITelemetryStatus {
    private boolean onlineStatus;

    private final Random connectionEventsSimulator = new Random(42);

        @Override
    public void connect(String telemetryServerConnectionString)
    {
        if (telemetryServerConnectionString == null || "".equals(telemetryServerConnectionString))
        {
            throw new IllegalArgumentException();
        }

        boolean success = connectionEventsSimulator.nextInt(10) <= 8;

        onlineStatus = success;
    }

    @Override
    public boolean getOnlineStatus(){
            return onlineStatus;
    }

    @Override
    public void disconnect(){
            onlineStatus=false;
    }
}
