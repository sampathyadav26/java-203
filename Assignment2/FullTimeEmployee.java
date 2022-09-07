package Assignment2;

public class FullTimeEmployee extends Employee
{

	public FullTimeEmployee(int empId, double basic, double allowance, double deductions, String firstName,
			String lastName, String address, String pincode) {
		super(empId, basic, allowance, deductions, firstName, lastName, address, pincode);
		// TODO Auto-generated constructor stub
	}
	
	public void CalcSalary()
	{
		Sal= (Basic*2) + Allowance-Deductions;
		System.out.println(Sal);
	}

}
