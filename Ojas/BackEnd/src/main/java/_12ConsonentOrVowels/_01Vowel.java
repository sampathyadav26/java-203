package _12ConsonentOrVowels;

import java.util.Scanner;

public class _01Vowel {

	public static void main(String[] args) {
		
		System.out.println("Enter the alphabet:");
		Scanner sc = new Scanner(System.in);
		
		char ch = sc.next().charAt(0);
		
		if((ch=='a') || (ch=='e') || (ch=='i') || (ch=='o') || (ch=='u')) {
			System.out.println("The Given Alphabet is vowel");
		}else {
			System.out.println("The Given Alphabet is Consonent");
		}
	}

}
