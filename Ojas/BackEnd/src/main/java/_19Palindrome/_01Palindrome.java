package _19Palindrome;

import java.util.Scanner;

public class _01Palindrome {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Value:");
		int a = sc.nextInt();
		
		int rem=0,rev=0;
		
		int temp = a;
		
		while(a>0) {
			rem = a%10;
			rev = rev*10+rem;
			a = a/10;
		}
		if(temp == rev) {
			System.out.println("Given Number is Palindrome...");
		}else {
			System.out.println("Not a Palindrome....");
		}

	}

}
