package _03AreaOfTriangle;

import java.util.Scanner;

public class _01AreaOfTringle {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the base:");
		double b = sc.nextDouble();
		
		System.out.println("Enter the base:");
		double h = sc.nextDouble();
		
		double res = (b*h)/2;
		System.out.println("Area Of Triangle is:"+res);
	}

}
