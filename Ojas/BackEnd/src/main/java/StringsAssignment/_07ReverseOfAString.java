package StringsAssignment;

import java.util.Scanner;

public class _07ReverseOfAString {

	public static void  main(String args[]){ 
		
	String str= "Java eshwar", nstr="";
    char ch;
       
      for (int i=0; i<str.length(); i++)
      {
        ch= str.charAt(i); //extracts each character
        nstr= ch+nstr; //adds each character in front of the existing string
      }
      System.out.println("Original word: "+str);
      System.out.println("Reversed word: "+ nstr);
		   
	}

}
