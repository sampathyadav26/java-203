package BasicPrograms;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
	
		int a,b;
		
		System.out.println("1.Addition");
		System.out.println("2.Substraction");
		System.out.println("3.Division");
		System.out.println("4.Multiplication");
		System.out.println("5.exit");
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Choose the function");
		int n = sc.next().charAt(0);
		
		switch(n) {
		case'1':System.out.println("Enter the addition of 2 numbers");
			a = sc.nextInt();
			b = sc.nextInt();
			int c = a+b;
			System.out.println("Some of addition is="+c);
			break;
			
		case'2':System.out.println("Enter the substraction of 2 numbers");
			a = sc.nextInt();
			b = sc.nextInt();
			c = a-b;
			System.out.println("Some of substraction is="+c);
			break;
			
		case'3':System.out.println("Enter the divide of  2 numbers");
			a = sc.nextInt();
			b = sc.nextInt();
			c = a%b;
			System.out.println("Some of divide is="+c);
			break;
			
		case'4':System.out.println("Enter the multiplication of 2 numbers");
			a = sc.nextInt();
			b = sc.nextInt();
			c = a*b;
			System.out.println("Some of multiplication is="+c);
			break;
			
		case'5':System.out.println("Thank You For Choosing...");
		break;
			
		}
	}

}
