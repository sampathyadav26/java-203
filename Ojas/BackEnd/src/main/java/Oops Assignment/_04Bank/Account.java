package _04Assignment;

import java.util.Scanner;

public class Account {
	
	static String AccNo;
	String Name;
	String MobileNumber;
	static double AvailbleBal = 10000;
	
	
	public Account(String accNo, String name, String mobileNumber) {
		this.AccNo = accNo;
		this.Name = name;
		this.MobileNumber = mobileNumber;
	}

	public static void Deposit() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Welcome To Deposite Section:");
		System.out.println("Enter Account Number ?");
		String DAcNo = sc.next();
		if(AccNo.equals(DAcNo)){
			System.out.println("Account access succfully:");
			System.out.println("Available Balence is:"+AvailbleBal);
			System.out.println("Do You Want to Deposite money:");
			System.out.println("Type Yes to continue or else exit:");
			String dept = sc.next();
			if(dept.equalsIgnoreCase("yes")) {
				System.out.println("Enter the Money");
				double mny = sc.nextDouble();
				mny = AvailbleBal+mny;
				System.out.println("Money Added Successfully and amont is:"+mny);
			}else {
				System.out.println("Thank you and Visit again:");
			}
			
		}else {
			System.out.println("Pls Enter Account Number Correctly:");
		}
	}
	
	public static void Withdraw() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Welcome To WithDraw Section:");
		System.out.println("Enter the Account Number ? ");
		String WAcNo = sc.next();
		
		if(WAcNo.equalsIgnoreCase(AccNo)) {
			System.out.println("Account access succfully:");
			System.out.println("Available Balence is:"+AvailbleBal);
			System.out.println("Do You Want To Withdraw money press yes others wise no:");
			String Was = sc.next();
			if(Was.equalsIgnoreCase("yes")) {
				System.out.println("Enter the Money");
				Double WithDrawMoney = sc.nextDouble();
				WithDrawMoney = AvailbleBal - WithDrawMoney;
				System.out.println("Deducted Successfully and Current Bal is:"+WithDrawMoney);
			}else {
				System.out.println("Invalid Pls Try agin..");
			}
		}else {
			System.out.println("Pls Enter Account Number Correctly:");
		}
		
	}
	
	public static void GetBalance() {
		System.out.println("Current Bal is:"+AvailbleBal);
	}
}
