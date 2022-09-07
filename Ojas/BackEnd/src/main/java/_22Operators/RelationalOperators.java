package _22Operators;

import java.util.Scanner;

public class RelationalOperators {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the value of x;");
		int x = sc.nextInt();
		
		System.out.println("Enter the value of y;");
		int y = sc.nextInt();
		
		System.out.println("X value is:"+x +"\n Y value is:"+y);
		
		System.out.println("x is equal y:"+ (x==y));
		
		System.out.println("x is less than y:"+ (x<y));
		
		System.out.println("x is Greater than y:"+ (x>y));
		
		System.out.println("x is less than equal to y:"+ (x<=y));
		
		System.out.println("x is Greater than equal to y:"+ (x>=y));
	}
}
