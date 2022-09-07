package Assignment2;

public class PartTimeEmployee extends Employee
{

	public PartTimeEmployee(int empId, double basic, double allowance, double deductions, String firstName,
			String lastName, String address, String pincode) {
		super(empId, basic, allowance, deductions, firstName, lastName, address, pincode);
		// TODO Auto-generated constructor stub
	}
	public void CalcSalary()
	{
		Sal= (Basic + Allowance)/2;
		System.out.println("Employee salary  "+Sal);
	}
	

}
