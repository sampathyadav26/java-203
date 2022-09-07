package _20SumOfDigits;

import java.util.Scanner;

public class _01SumOfDigits {

	public static void main(String[] args) {
		int rem=0,rev=0;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a number");
		int n = sc.nextInt();
		
		while(n!=0) {
			rem = n%10;
			rev	= rev+rem;
			n = n/10;
		}
		System.out.println("Sum of the digits is:"+rev);
	}

}
