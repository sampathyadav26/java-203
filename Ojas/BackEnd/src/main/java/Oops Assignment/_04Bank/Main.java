package _04Assignment;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Account ac = new Account("123456", "eshwar", "9908272275");
		System.out.println("Enter Account Number:");
		String EnteredAccountNumber = sc.next();
			if(ac.AccNo.equals(EnteredAccountNumber)) {
				System.out.println("-----------Account Details----------");
				System.out.println("WElcome To:"+ac.Name);
				System.out.println("Account Number is:"+ac.AccNo);
				System.out.println("Account Name is:"+ac.Name);
				System.out.println("Mobile Number is:"+ac.MobileNumber);
				System.out.println("------------------------------------");
				System.out.println("Do You Want to Deposite press Dept:");
				System.out.println("Do You Want to WithDraw press With:");
				String Depts = sc.next();
				
				if(Depts.equalsIgnoreCase("Dept")) {
					ac.Deposit();
				}else {
					ac.Withdraw();
				}
				//ac.Deposit();
				
			}else {
				System.out.println("pls Try again:");
			}
		
		
	}

}
