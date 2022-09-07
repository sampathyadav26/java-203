package _08ReverseAString;

import java.util.Scanner;

public class ReverseString {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a String.");
		
		String s1 = sc.next();
		
		for(int ch=s1.length();ch>0;ch--) {
			System.out.print(s1.charAt(ch-1));
		}
	}

}
