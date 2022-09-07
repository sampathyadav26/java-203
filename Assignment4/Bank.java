package Assignment4;

import java.util.Scanner;

public class Bank {
	public static void main(String[] args) {
		Account account = new Account("147258369", "Anand", "7702728690", 2000.00);
		CurrentAccount currentAccount = new CurrentAccount();
		SavingAccount savingAccount = new SavingAccount();
		CheckingAccount  ca=new CheckingAccount();
		Scanner sc = new Scanner(System.in);
		int count = 0;
		while (true) {
		System.out.print("Enter Pin : ");
		String pin = sc.next();
		
			if (pin.equals("0315")) {
				System.out.println("---------------------------------------------------------");
				System.out.println("    Account Holder name :" + account.name);
				System.out.println("    Account number :" + account.accoNo);
				System.out.println("    Account holder Mobile Number :" + account.mobileNumber);
				System.out.println("    Availabe balance :" + account.amount);
				System.out.println("--------------------------------------------------------- ");
				System.out.println("press 1 for Deposit");
				System.out.println("press 2 for Withdraw");
				System.out.println("press 3 for Balance Enquiery");
				System.out.println("press 4 for CurrenAcount Interest rate");
				System.out.println("press 5 for SavingAccount Interest rate");
				System.out.println("Press 6 for Exit");
				int choice = sc.nextInt();
				switch (choice) {
				case 1:
					account.deposit();
					count++;
					break;
				case 2:
					
					account.withdraw();
					System.out.println(count++);
					break;
				case 3:
					account.getBalance();
					break;
				case 4:
					currentAccount.addInterest();
					break;
				case 5:
					savingAccount.addInterest();
					break;
				case 6:
					System.out.println("Thnakyou for visiting");
					System.exit(0);
				 
				}
				if(count>ca.NoOfFreeTransactions)
				{
					account.amount=account.amount-100;
					System.out.println("amount exceed");
				}
				System.out.println(account.amount);
				
			}else{				
				System.out.println("Invalid pin please try again");
			}
			//System.out.println(count++); 	
		}
	}
}
