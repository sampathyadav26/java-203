package Inheritance;

import java.util.Scanner;

public class SumOfDigit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter value");
		int a=sc.nextInt();
		int sum=0;
		while(a>0) {
			int r=a%10;
			sum=sum+r;
			a=a/10;
			
		}
		System.out.println(sum);
		

	}

}
