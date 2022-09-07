package StringsAssignment;

public class _13Palindrome {

	public static void main(String[] args) {
		String str= "oyo", nstr="";
	    char ch;
	       
	      for (int i=0; i<str.length(); i++)
	      {
	        ch= str.charAt(i); //extracts each character
	        nstr= ch+nstr; //adds each character in front of the existing string
	      }
	   
	      if(nstr.equals(nstr)) {
	    	  System.out.println("The Given String is Palindrome");
	      }else {
	    	  System.out.println("Not a Palindrome..");
	      }
	}

}
