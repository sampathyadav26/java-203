package StringsAssignment;

import java.util.Scanner;

public class TestingString {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a string:");
		String str = sc.nextLine();
		String[] s1 = str.split(" ");
		for(String s2:s1) {
			System.out.println(s2);
		}
		
		
	
//		System.out.println("What are the character do u want to count:");
//		char s2 = sc.next().charAt(0);
//		
//		v 
//		int count = 0;
//		for(int i=0;i<=s1.length()-1;i++)
//		{
//			if(s1.charAt(i) == s2)
//			{
//				count++;
//			}
//		}
//		System.out.println("Number of  letters "+s2+" s having:"+count);


	}

}
