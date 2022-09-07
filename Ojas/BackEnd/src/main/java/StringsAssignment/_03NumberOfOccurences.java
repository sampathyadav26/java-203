package StringsAssignment;

public class _03NumberOfOccurences {

		public static void main(String[] args) {
		 String myString = "This esh  my code,esh it is in Java";
		 String[] s1 = myString.split("a");
		 for(String s:s1) {
			 System.out.println(s);
		 }
	     int count =  s1.length -1;
	     System.out.println("Total occurrences of a substring in the given string: " + count);
	}

}
