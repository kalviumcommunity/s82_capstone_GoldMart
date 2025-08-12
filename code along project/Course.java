public class Course {
    // Static counter for generating unique Course IDs
    private static int nextCourseIdCounter = 101;

    // Instance variables
    private int courseId;
    private String courseName;

    // Constructor to initialize Course object
    public Course(String courseName) {
        this.courseId = nextCourseIdCounter++;
        this.courseName = courseName;
    }

    // Method to display course details
    public void displayDetails() {
        System.out.println("Course ID: C" + courseId);
        System.out.println("Course Name: " + courseName);
        System.out.println("-------------------");
    }
}
