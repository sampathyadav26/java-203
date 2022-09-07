package _13HCF;

import java.util.Scanner;

public class _01HcfUsingScanner {

	public static void main(String[] args) {
	
		int temp;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter frt Number:");
		int n1=sc.nextInt();
		
		System.out.println("Enter Sec Number:");
		int n2=sc.nextInt();

		while(n2>0) {
			temp = n2;
			n2 = n1%n2;
			n1 =temp;
		}
		System.out.println("HCF is="+n1);
	}

}
