package _01AreaOfCircle;

import java.util.Scanner;

public class _01AreaUsingStaticMethod {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number of r");
		
		 double r = sc.nextDouble();
		 
		 double area = (22*r*r)/7;// Pi r squre
		 
		 System.out.println(area);
	}

}
