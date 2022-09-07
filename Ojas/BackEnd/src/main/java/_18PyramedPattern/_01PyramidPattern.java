package _18PyramedPattern;

import java.util.Scanner;

public class _01PyramidPattern {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Number");
		int n = sc.nextInt();
		
		System.out.println("Enter the Symbol");
		String s1 = sc.next();

		int sp=n-1, str=1;
		
		for(int i=1;i<=n;i++) {
			
			for(int j=1;j<=sp;j++) {
				System.out.print(" ");
			}
			for(int k=1;k<=str;k++) {
				System.out.print(s1);
			}
			System.out.println(" ");
			sp--;
			str+=2;
		}
	}

}
