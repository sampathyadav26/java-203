package Constructors;

class nani{
	int i;
	nani(){
		this(5);
		System.out.println("Default Constructor of Parent");
	}
	nani(int i){
		System.out.println("Parameterized Constructor of parent");
	}
}

public class _03StudentDetails extends nani{
	
	public String name;
	public int id;
	public String Course;
	public int marks;
	int grade;
	
	_03StudentDetails(String name,int id,String Course,int marks) {
		super();
		this.name=name;
		this.id=id;
		this.Course=Course;
		this.marks=marks;
		System.out.println("Child Parameterized Constructor");
	}
	
//	_03StudentDetails(String name,int id,String Course,int marks , int grade) {
//		super();
//		this.name=name;
//		this.id=id;
//		this.Course=Course;
//		this.marks=marks;
//		System.out.println("Child Parameterized Constructor");
//	}
	
	_03StudentDetails(){
		this("eshwar",1,"CSE",10);
		System.out.println("Default Constructor of child");
	}

	public static void main(String[] args) {
		_03StudentDetails sd = new _03StudentDetails();
	}

}
