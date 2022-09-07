package _01Assignment;

import java.util.Scanner;

public class FullTimeEmployee extends Employee{

	
	public FullTimeEmployee(int empId, double basic, double allowance,double deductions, String firstName,
			String lastName, String address, String pincode) {
		super(empId, basic,allowance, deductions, firstName, lastName, address, pincode);
	}
	
	
	public void CalcSalary(){
		this.Sal = this.Basic + (this.Allowance-this.Deductions);
		System.out.println("******Employee FullTime Sal Details is*********");
		System.out.println("Employee id is:"+this.EmpId);
		System.out.println("Employee Basic is:"+this.Basic);
		System.out.println("Employee allowance is:"+this.Allowance);
		System.out.println("Employee Deductions is:"+this.Deductions);
		System.out.println("Employee Realname is:"+getRealname());
		System.out.println("Employee Address is:"+this.Address);
		System.out.println("Employee Pincode is:"+this.Pincode);
		System.out.println("Employee Sal is:"+this.Sal);
		System.out.println("***********************************************");
	}

}
