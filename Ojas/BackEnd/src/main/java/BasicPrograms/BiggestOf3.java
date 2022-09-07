package BasicPrograms;

import java.util.Scanner;

public class BiggestOf3 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the value of a:");
		int a = sc.nextInt();
		
		System.out.println("Enter the value of b:");
		int b = sc.nextInt();
		
		System.out.println("Enter the value of c:");
		int c = sc.nextInt();
		
		if(a>=b && a>=c) {
			System.out.println("The Given a value is big");
		}else if(b>=c && b>=a) {
			System.out.println("The Given b value us big");
		}else {
			System.out.println("Given c value is big");
		}
	}

}
