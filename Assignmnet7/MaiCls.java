package Assignmnet7;

import java.util.Scanner;

public class MaiCls {
	public static void main(String[] args) {
		FinancialPetition fp = new FinancialPetition(1, "Anand", "30/06/2022", "Hyderabad", "L.B.Nagar",
				"Pancard Rename", false, 1000.00);
		NonFinancial_Petition nfp = new NonFinancial_Petition(2, "Swapna", "29/06/202", "Hyderabad", "Vanasthalipuram",
				"Aadhar Correction", false, "Swapnanand", "05/07/2022");

		Scanner sc = new Scanner(System.in);
		System.out.println("Press choose Either 1 or 2");
		System.out.println("Enter 1 for FinancialPetition");
		System.out.println("Enter 2 for NonFinancialPetition");
		System.out.print("Enter the number: ");
		while (true) {
			int choice = sc.nextInt();
			switch (choice) {
			case 1:
				fp.display();
				break;
			case 2:
				nfp.display();
				break;
			default:
				System.out.println("Please Enter Valid Option");

			}
		}
	} 
}
