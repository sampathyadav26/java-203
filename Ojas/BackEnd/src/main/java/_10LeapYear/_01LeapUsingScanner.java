package _10LeapYear;

import java.util.Scanner;

public class _01LeapUsingScanner {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Year:");
		
		long year = sc.nextLong();
		
		if(year!=0) {
			 if((year % 400 == 0)	|| (year % 4==0) ) {
				 System.out.println("The given year leap year");
			 }else {
				 System.out.println("Not a leap Year");
			 }
		}
	}
}
