package Assignment4;


import java.util.Scanner;

public class Account {
	String accoNo;
	String name;
	String mobileNumber;
	double amount;


	public Account(String accoNo, String name, String mobileNumber, double amount) 
	{	
		this.accoNo = accoNo;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.amount = amount;
	}
	

	public void deposit() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Money Deposit Department");
		System.out.print("Enter the Amount to Deposit : ");
		double depositAmount=sc.nextDouble();
		amount+=depositAmount;
		System.out.println("Amount added Sucessfully ");
		System.out.println("Current Balance is:"+amount);
		
	}
				
		
	public void withdraw() {
		CheckingAccount  ca=new CheckingAccount();
		int count=1;
		Scanner sc = new Scanner(System.in);
		System.out.println("Welcome To Withdraw Section:");
		System.out.print("Enter Amount: ");
		/*if(count>=2)
		{
			ca.Transaction();
		}*/
		double money=sc.nextDouble();
		amount-=money;
		System.out.println("Amount Withdraw Sucessfully ");
		//System.out.println("Current balance :"+amount);
		
		
	}

	public void getBalance() {
		System.out.println("Current balance is:"+amount);
	}

}
