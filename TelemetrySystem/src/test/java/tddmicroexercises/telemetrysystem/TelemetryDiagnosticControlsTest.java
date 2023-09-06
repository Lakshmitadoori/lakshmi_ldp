package tddmicroexercises.telemetrysystem;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class TelemetryDiagnosticControlsTest {

    private TelemetryDiagnosticControls telemetryDiagnosticControls;

    @Mock
    private TelemetryStatus telemetryStatus;
    @Mock
    private TelemetryClient telemetryClient;
    String diagnosticMessageResult =
            "LAST TX rate................ 100 MBPS\r\n"
                    + "HIGHEST TX rate............. 100 MBPS\r\n"
                    + "LAST RX rate................ 100 MBPS\r\n"
                    + "HIGHEST RX rate............. 100 MBPS\r\n"
                    + "BIT RATE.................... 100000000\r\n"
                    + "WORD LEN.................... 16\r\n"
                    + "WORD/FRAME.................. 511\r\n"
                    + "BITS/FRAME.................. 8192\r\n"
                    + "MODULATION TYPE............. PCM/FM\r\n"
                    + "TX Digital Los.............. 0.75\r\n"
                    + "RX Digital Los.............. 0.10\r\n"
                    + "BEP Test.................... -5\r\n"
                    + "Local Rtrn Count............ 00\r\n"
                    + "Remote Rtrn Count........... 00";
    @BeforeEach
    public void setUp() {
        telemetryStatus = mock(TelemetryStatus.class);
        telemetryClient = mock(TelemetryClient.class);

        telemetryDiagnosticControls = new TelemetryDiagnosticControls(telemetryStatus, telemetryClient);
    }

    @Test
    public void checkTransmission_SendMessage_ReceiveStatusMessageResponse() throws Exception {


        when(telemetryStatus.getOnlineStatus()).thenReturn(true);
        when(telemetryClient.receive()).thenReturn(diagnosticMessageResult);

        telemetryDiagnosticControls.checkTransmission();

        assertEquals(diagnosticMessageResult, telemetryDiagnosticControls.getDiagnosticInfo());
    }
    @Test
    public void testSetDiagnosticInfo() {

        String newDiagnosticInfo = "New diagnostic info";
        telemetryDiagnosticControls.setDiagnosticInfo(newDiagnosticInfo);

        assertEquals(newDiagnosticInfo, telemetryDiagnosticControls.getDiagnosticInfo());
    }

    @Test
    public void checkTransmission_UnableToConnect() {

        when(telemetryStatus.getOnlineStatus()).thenReturn(false);

        when(telemetryStatus.getOnlineStatus()).thenReturn(false);

        assertThrows(Exception.class, () -> {
            telemetryDiagnosticControls.checkTransmission();
        });
    }
    @Test
    public void checkTransmission_SuccessfulTransmissionResponse() throws Exception {

        when(telemetryStatus.getOnlineStatus()).thenReturn(false);


        when(telemetryStatus.getOnlineStatus())
                .thenReturn(false)
                .thenReturn(false)
                .thenReturn(false)
                .thenReturn(true);


        when(telemetryClient.receive()).thenReturn("SuccessfulTransmissionResponse");

        telemetryDiagnosticControls.checkTransmission();

        assertEquals("SuccessfulTransmissionResponse", telemetryDiagnosticControls.getDiagnosticInfo());
    }



}
