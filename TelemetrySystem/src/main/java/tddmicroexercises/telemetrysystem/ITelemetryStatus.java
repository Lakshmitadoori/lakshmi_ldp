package tddmicroexercises.telemetrysystem;

public interface ITelemetryStatus {
    boolean getOnlineStatus();

    void disconnect();

    void connect(String telemetryServerConnectionString);
}
