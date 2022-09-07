package com.jsp.app;

import java.util.Scanner;

public class AddTwoNumbers {
	public static void main(String[] args) {
		Scanner Scan = new Scanner(System.in);
		System.out.println("Enter Two Numbers");
		int a = Scan.nextInt();
		int b = Scan.nextInt();
		
		int c = a+b;
		System.out.println(c);
	}
}
