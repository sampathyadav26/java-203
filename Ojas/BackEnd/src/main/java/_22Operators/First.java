package _22Operators;

import java.util.Scanner;

//Arthimatic Operators
public class First {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the value of a:");
		int a = sc.nextInt();
		
		System.out.println("Enter the value of a:");
		int b = sc.nextInt();
		
		System.out.println(a+" "+b);
		System.out.println("Addition is:"+(a+b));
		System.out.println("Substraction is:"+(a-b));
		System.out.println("Multiplication is:"+(a*b));
		System.out.println("Division is:"+(a%b));
	}
}
