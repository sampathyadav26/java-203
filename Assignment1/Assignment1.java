package Assignment1;

/**
 * 
 * @author al22077
 *
 *  Create a class Student with StudentId,Name,MobileNo,Address,Course. Write getters and setters for all the data members,
 *  Write a method Calculate Fee which returns the fee depending on the course taken.
 *  Write child classes FastTrackBatchStudent,CorporateBatchStudent,
 *  WeekendBatchStudent,CorporateWeekendBatchStudent which overrides the Calculate Fee method and returns an appropriate fee.
 *  You need to identify what are the oops concepts involved. Develop the Java Application
 */
public class Assignment1 {
	
	//Data hiding
	private int StudentId;
	private String name;
	private long mobileNo;
	private String address;
	private String Course;
	
	//Date Abstraction
	public int getStudentId() {
		return StudentId;
	}
	public void setStudentId(int studentId) {
		StudentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCourse() {
		return Course;
	}
	public void setCourse(String course) {
		Course = course;
	}
	public double calculateFee(String course)
	{
		double fee=0;
		if(course.equals("java"))
		{
			fee=15000;
		}
		else if(course.equals("UI"))
		{
			fee=12000;
		}
		else if(course.equals("testing"))
		{
			fee=1000;
		}
		return fee;
	}
}
