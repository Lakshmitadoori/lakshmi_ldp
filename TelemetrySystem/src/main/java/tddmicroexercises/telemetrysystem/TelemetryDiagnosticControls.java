package tddmicroexercises.telemetrysystem;

public class TelemetryDiagnosticControls
{
    private final String DiagnosticChannelConnectionString = "*111#";
    private String diagnosticInfo = "";
    private final ITelemetryStatus telemetryStatus;
    private final ITelemetrySender telemetrySender;


        public TelemetryDiagnosticControls(TelemetryStatus telemetryStatus,TelemetryClient telemetryClient)
        {
            this.telemetryStatus = telemetryStatus;
            this.telemetrySender = telemetryClient;

        }
        public String getDiagnosticInfo(){
            return diagnosticInfo;
        }
        
        public void setDiagnosticInfo(String diagnosticInfo){
            this.diagnosticInfo = diagnosticInfo;
        }
 
        public void checkTransmission() throws Exception
        {
            diagnosticInfo = "";

            telemetryStatus.disconnect();
    
            int retryLeft = 3;
            while (telemetryStatus.getOnlineStatus() == false && retryLeft > 0)
            {
                telemetryStatus.connect(DiagnosticChannelConnectionString);
                retryLeft -= 1;
            }
             
            if(telemetryStatus.getOnlineStatus() == false)
            {
                throw new Exception("Unable to connect.");
            }
    
            telemetrySender.send(TelemetryClient.DIAGNOSTIC_MESSAGE);
            diagnosticInfo = telemetrySender.receive();
    }

}
