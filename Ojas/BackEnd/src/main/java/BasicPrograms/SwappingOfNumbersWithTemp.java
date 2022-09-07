package BasicPrograms;

import java.util.Scanner;

public class SwappingOfNumbersWithTemp {
	public static void main(String[] args) {
		int a,b,temp;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Value Of a:");
		a = sc.nextInt();
		
		System.out.println("Enter the value Of B:");
		b=sc.nextInt();
		
		System.out.println("After Swapping");
		
		temp = a;
		a=b;
		b=temp;
		
	
		System.out.println(a+" \n "+b);
	}
}
