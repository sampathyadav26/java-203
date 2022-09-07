package _16Xpattern;

import java.util.Scanner;

public class _01Pattern {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Number");
		int n = sc.nextInt();
		
		System.out.println("Enter the Symbol what you want");
		String s1 = sc.next();
		
		for(int i=1;i<=n;i++) {
			for(int j=1;j<=n;j++) {
				if(i==j || i+j==n+1) {
					System.out.print(s1);
				}else {
					System.out.print(" ");
				}
			}
			System.out.println(" ");
		}
	}
}
