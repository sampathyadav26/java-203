package Assignment2;

import java.net.PasswordAuthentication;
import java.util.Scanner;

public class EmpSalary 
{
	public static void main(String[] args) {
		//Employee employee=new Employee(0, 0, 0, 0, null, null, null, null);
		PartTimeEmployee partTimeEmployee=new PartTimeEmployee(100, 6000.00, 2000, 1000, "Anand", "Gupta", "Hydeabad", "500074");
		FullTimeEmployee  fullTimeEmployee=new FullTimeEmployee(102, 6000.00, 2000, 1000, "avi", "nash", "Hydeabad", "500008");
		Scanner sc=new Scanner(System.in);
		//int ch=0;
		while(true){
			System.out.println("--------------------------------------");
			System.out.println("|      OJAS INOVATIVE TECHNOLGIES    |");
			System.out.println("--------------------------------------");
			System.out.println("|  1.      PART Time Job             |");
			System.out.println("|  2.      FULL Time Job             |");
			System.out.println("|  3.           EXIT                 |");
			System.out.println("--------------------------------------");
			System.out.println("Enter Your choice ?");
			int choice=sc.nextInt();
			switch(choice){
			
			case 1:
				System.out.println("Employee Id  "+partTimeEmployee.EmpId );
				System.out.println("Employee Name :"+partTimeEmployee.getRealName());
				System.out.println("Employee Basic "+partTimeEmployee.Basic);
				System.out.println("Employee Allowance "+partTimeEmployee.Allowance);
				System.out.println("Employee Address "+partTimeEmployee.Address);
				System.out.println("Employee Pincode "+partTimeEmployee.Pincode);	
				//System.out.println("Employee salary  "+partTimeEmployee.CalcSalary());
				partTimeEmployee.CalcSalary();
				break;
			case 2:
				System.out.println("Employee Id  "+fullTimeEmployee.EmpId );
				System.out.println("Employee Name :"+fullTimeEmployee.getRealName());
				System.out.println("Employee Basic "+fullTimeEmployee.Basic);
				System.out.println("Employee Allowance "+fullTimeEmployee.Allowance);
				System.out.println("Deduction amount "+fullTimeEmployee.Deductions);
				System.out.println("Employee Address "+fullTimeEmployee.Address);
				System.out.println("Employee Pincode "+fullTimeEmployee.Pincode);	
				//System.out.println("Employee salary  "+partTimeEmployee.CalcSalary());
				fullTimeEmployee.CalcSalary();
				break;
			case 3:
				System.exit(0);
				break;
			}
		}
	}

}
