package tddmicroexercises.telemetrysystem;

public interface ITelemetrySender {
    public static final String DIAGNOSTIC_MESSAGE = "AT#UD";
    String receive();
    void send(String message);
}
