public class Student {
    // Static counter for generating unique Student IDs
    private static int nextStudentIdCounter = 1;

    // Instance variables
    private int studentId;
    private String name;

    // Constructor: initializes ID and name
    public Student(String name) {
        this.studentId = nextStudentIdCounter++;
        this.name = name;
    }

    // Method to display student details
    public void displayDetails() {
        System.out.println("Student ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("-------------------");
    }
}
