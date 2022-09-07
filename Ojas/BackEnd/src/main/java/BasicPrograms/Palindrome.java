package BasicPrograms;

import java.util.Scanner;

public class Palindrome {

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
			System.out.println("Given Number is ArmStrong...");
		}else {
			System.out.println("Not a arm Strong....");
		}
		
		
		
	}

}
