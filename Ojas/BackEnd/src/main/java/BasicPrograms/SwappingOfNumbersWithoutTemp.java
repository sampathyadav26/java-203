package BasicPrograms;

import java.util.Scanner;

public class SwappingOfNumbersWithoutTemp {

	public static void main(String[] args) {
		
		int a,b;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Value Of a:");
		a = sc.nextInt();
		
		System.out.println("Enter the value Of B:");
		b=sc.nextInt();
		
		a=a+b;// a = 10+20 =>30
		b=a-b;// b = 10-20 =>10
		a=a-b;// a = 30-10 =>20
		
		System.out.println(a+" "+b);
	}

}
