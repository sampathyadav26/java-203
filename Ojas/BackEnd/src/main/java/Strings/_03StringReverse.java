package Strings;

import java.util.Scanner;

public class _03StringReverse {

	public String reverse(String input) {
		
		 String output = "";
		 
		 for(int i=input.length()-1;i>=0;i--) {
			output = output+input.charAt(i);
		 }
		 
		 return output;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the input String");
		String input = sc.next();
		System.out.println("Before Reverse:"+input);
		
		_03StringReverse str = new _03StringReverse();
	
		System.out.println("After Reverse:"+str.reverse(input));
	}

}
