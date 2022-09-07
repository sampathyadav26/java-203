package Assignment2;

public class Employee {
	
	
	int EmpId;
	double Sal = 0;
	double Basic;
	double Allowance;
	double Deductions;
	String FirstName;
	String LastName;
	String Address;
	String Pincode;
	private String realName;
	
	
	public String getRealName() {
		return FirstName+LastName;
	}
	
	
	public Employee(int empId, double basic, double allowance, double deductions, String firstName, String lastName,
			String address, String pincode) {
		
		this.EmpId = empId;
		this.Basic = basic;
		this.Allowance = allowance;
		this.Deductions = deductions;
		this.FirstName = firstName;
		this.LastName = lastName;
		this.Address = address;
		this.Pincode = pincode;
	}
	
	
	public void CalcSalary()
	{
		Sal= Basic + (Allowance-Deductions);
		System.out.println(Sal);
	}
}
