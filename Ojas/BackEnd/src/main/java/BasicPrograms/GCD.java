package BasicPrograms;

import java.util.Scanner;

public class GCD {
	public static void main(String[] args) {
		
		int gcd=1;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("enter the value of a:");
		int a = sc.nextInt();
		
		System.out.println("Enter the value of b:");
		int b = sc.nextInt();
		
		for(int i=1;i<=a && i<=b;i++) {
			if(a%i==0 && b%i==0) {
				gcd=i;
			}
			System.out.println(gcd);
		}
	}
}

