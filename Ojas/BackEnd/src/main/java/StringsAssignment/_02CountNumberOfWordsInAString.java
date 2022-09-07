package StringsAssignment;

import java.util.StringTokenizer;

public class _02CountNumberOfWordsInAString {

	public static void main(String[] args) {
		String str = "welcome to java   tutorial on Java2blog";

		int count = 1,i;
	 
	        for (i = 0; i < str.length() - 1; i++)
	        {
	        	//System.out.println(str.charAt(i)+" "+str.charAt(i+1));
	            if ((str.charAt(i) == ' ') && (str.charAt(i + 1) != ' '))
	            {
	                count++;
	            }
	            
	        }
	        System.out.println("Count of a string is:"+count);
		
	}

}
