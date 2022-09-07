package Strings;

import java.util.Scanner;

public class _06StringLengthUsingWords {

	public static void main(String[] args) {
	
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the string");
		String str = sc.nextLine();
		
		String[] str1 = str.split("");
		for(String s:str1) {
			System.out.print(s);
		}
	
		System.out.println("String length is:"+str1.length);
	}

	

}
