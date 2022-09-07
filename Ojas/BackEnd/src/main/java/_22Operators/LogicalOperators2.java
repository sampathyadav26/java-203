package _22Operators;

import java.util.Scanner;

public class LogicalOperators2 {
public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the value of x:");
		int x = sc.nextInt();
		
		System.out.println("Enter the value of y:");
		int y = sc.nextInt();
		
		System.out.println("Enter the value of z:");
		int z = sc.nextInt();
		
		if(x>y || x<z) {
			System.out.println("The Given x value is big..");
		}else if(y>x || y>z) {
			System.out.println("The given y value is big..");
		}else {
			System.out.println("The given z value is big");
		}
	}
}
