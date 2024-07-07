import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public class Clock {

    public static void main(String[] args) {
        // Get the current time in GMT
        LocalDateTime gmtTime = LocalDateTime.now(ZoneId.of("GMT"));

        // Format the GMT time
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss dd-MM-yyyy");
        String formattedTime = gmtTime.format(formatter);

        // Display the formatted GMT time
        System.out.println("Current GMT time: " + formattedTime);
    }
}
