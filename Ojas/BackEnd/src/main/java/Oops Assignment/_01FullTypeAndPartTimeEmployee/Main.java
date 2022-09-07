package _01Assignment;

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
			
		System.out.println("Enter Your Choice ?");
		System.out.println("Select 1 for FullTimeEmployee:");
		System.out.println("Select 2 as PartTimeEmployee:");
		int choice = sc.nextInt();
		
		switch(choice) {
		case 1:	System.out.println("Enter emp id:");
				int id = sc.nextInt();
				
				
				System.out.println("Enter emp basic:");
				double basic = sc.nextDouble();
				
				System.out.println("Enter emp allowance:");
				double allowanc = sc.nextDouble();
				
				System.out.println("Enter emp deductions:");
				double deductions = sc.nextDouble();
				
				System.out.println("Enter emp frtname:");
				String frtname = sc.next();
				
				System.out.println("Enter emp LastName:");
				String LastName = sc.next();
				
				System.out.println("Enter emp Address:");
				String Address = sc.next();
				
				System.out.println("Enter emp Pincode:");
				String Pincode = sc.next();
				
				FullTimeEmployee fe = new FullTimeEmployee(id, basic, allowanc ,deductions, frtname, LastName, Address,Pincode );
				fe.CalcSalary();
				break;
				
		case 2:System.out.println("Enter emp id:");
				int pid = sc.nextInt();
				
				
				System.out.println("Enter emp basic:");
				double pbasic = sc.nextDouble();
				
				System.out.println("Enter emp allowance:");
				double pallowance = sc.nextDouble();
				
				System.out.println("Enter emp deductions:");
				double pdeductions = sc.nextDouble();
				
				System.out.println("Enter emp frtname:");
				String pfrtname = sc.next();
				
				System.out.println("Enter emp LastName:");
				String pLastName = sc.next();
				
				System.out.println("Enter emp Address:");
				String pAddress = sc.next();
				
				System.out.println("Enter emp Pincode:");
				String pPincode = sc.next();
				
				PartTimeEmployee pt = new PartTimeEmployee(pid, pbasic, pdeductions, pfrtname, pLastName, pAddress, pPincode);
				pt.CalcSalary();
				break;
				
		default:System.out.println("Invalid...");
					
		}
	}
}
