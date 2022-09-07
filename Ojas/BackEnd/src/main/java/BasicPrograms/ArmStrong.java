package BasicPrograms;

import java.util.Scanner;

public class ArmStrong {

	public static void main(String[] args) {
		

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the palindrome number");
		int n = sc.nextInt();
		
		int a=n;
		
		int rev=0,rem=0,temp=0;
		
		while(n>0) {
			rem = n%10;
			temp= rem*rem*rem;
			rev = rev+temp;
			n = n/10;
		}
		if(a==rev) {
			System.out.println("The Given Number is ArmStrong");
		}else {
			System.out.println("Number is not a ArmStrong");
		}
	}

}
