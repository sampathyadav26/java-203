package PetitionAndPetitionId;

import java.util.Scanner;

public class MainCls {
	public static void main(String[] args) {
		FinancialPetition fp = new FinancialPetition(1,"eshwar", "06/08/2022", "Hyderabad", "Kphb", "Adhar Problem", false, "1000");
		NonFinancialPetition nfp = new NonFinancialPetition(2,"Nani", "06/08/2022", "Warangal", "HNK", "Pan Problem", false, "Nani","06/08/2022");
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Please Choose Either 1 nor 2..");
		System.out.println("Enter 1 for Financial Petition");
		System.out.println("Enter 2 for Non-Financial Petition");
		int choice = sc.nextInt();
		
		switch(choice){
		case 1:fp.display();
		break;
		
		case 2:nfp.display();
		break;
		
		default:System.out.println("Please enter valid Option");
		}
	}
}
