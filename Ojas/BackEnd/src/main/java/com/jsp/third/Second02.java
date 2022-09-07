package com.jsp.third;

import java.util.Scanner;

public class Second02 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the number a value");
		int a = sc.nextInt();
		
		System.out.println("enter the number a value");
		int b = sc.nextInt();
		add(2,3);
		
		Second02 obj = new Second02();
		System.out.println(obj.sub(9,5));
	}
	
	//this is static method and return type is void so directly we can access
	public static void add(int i,int j) {
		System.out.println(i+j);
	}
	
	//This is Non-static method and return type is int so we can create object and access through reference
	public int sub(int a,int b) {
		return a-b;
	}
}
