package StringsAssignment;

public abstract class _09SwappingOfTwoStrings {

	public static void main(String[] args) {
		 String s1 = "javaguides";
	     String s2 = "javadesignpatterns";
	     String s3 = "";
	     System.out.println("Before Swapping");
	     System.out.println(s1);
	     System.out.println(s2);
	     
	     s3 = s1;
	     s1 = s2;
	     s2 = s3;
	     
	     System.out.println("After Swapping:");
	     System.out.println(s1);
	     System.out.println(s2);
	}

}
