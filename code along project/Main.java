public class Main {
    public static void main(String[] args) {
        // Create Student objects
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");

        // Create Course objects
        Course c1 = new Course("Mathematics");
        Course c2 = new Course("Science");

        // Display student details
        System.out.println("----- Student Details -----");
        s1.displayDetails();
        s2.displayDetails();

        // Display course details
        System.out.println("----- Course Details -----");
        c1.displayDetails();
        c2.displayDetails();
    }
}
