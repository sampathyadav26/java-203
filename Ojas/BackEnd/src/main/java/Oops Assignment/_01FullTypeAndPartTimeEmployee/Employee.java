package _01Assignment;

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
	 protected String Realname;
	 
	
	public String getRealname() {
		return Realname = FirstName+" "+ LastName;
	}

	public void setRealname(String FirstName,String LastName) {
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Realname = this.FirstName+this.LastName;
	}
	
	public Employee(int empId, double basic, double allowance, double deductions, String firstName,
			String lastName, String address, String pincode) {
		
		EmpId = empId;
		Basic = basic;
		Allowance = allowance;
		Deductions = deductions;
		FirstName = firstName;
		LastName = lastName;
		Address = address;
		Pincode = pincode;
		
	}

	public void CalcSalary(){
		this.Sal = this.Basic + (this.Allowance-this.Deductions);
		System.out.println("Employee salarey is"+this.Sal);
	}
	


}
