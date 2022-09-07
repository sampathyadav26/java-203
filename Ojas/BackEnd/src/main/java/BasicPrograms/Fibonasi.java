package BasicPrograms;

import java.util.Scanner;

/**
 * 0 1 1 2 3 5 7 12
 * 
 * 
 * 
dfgh*/

public class Fibonasi {

	public static void main(String[] args) {
		int a,b,c=0;
		Scanner sc = new Scanner(System.in);
		System.out.println("enter a number.");
		int n = sc.nextInt();
		
		a=0;
		b=1;
		System.out.println(a);
		System.out.println(b);

	
		
		for(int i=1;i<n-2;i++) {
			c=a+b; //1
			System.out.println(c);
			a=b; // a=1 b=0
			b=c; // b=1
		}
		
		
	}

}
