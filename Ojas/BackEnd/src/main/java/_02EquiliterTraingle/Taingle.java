package _02EquiliterTraingle;

import java.util.Scanner;

public class Taingle {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a Number:");
		
		double d = sc.nextDouble();
		
		double res = (Math.sqrt(3)/(4)*(d*d));
		System.out.println(res);
	}

}
