package Strings;

public class _03ClassPractical {

	public static void main(String[] args) {
		
		String str = "HydERAbaD";
		String TYPES[]= {"nano","kia","BMW"};
		
		System.out.println("String length is="+str.length());
		System.out.println("String character h index is="+str.charAt(0));
		System.out.println("d character index value is="+str.indexOf('D'));
		System.out.println("Contains methos is="+str.contains("BAD"));
		System.out.println("Substring  is="+str.substring(5,9));
		System.out.println("Contains methos is="+str.toUpperCase());
		System.out.println("Contains methos is="+str.toLowerCase());
		System.out.println("Hello"+str);
		
		int index1=TYPES.indexOf("n");
		System.out.println("d character index value is="+TYPES.indexOf("nano"));
		
		String str1 = "    HI    ";
		System.out.println(str1);
		System.out.println(str1.trim());
	}

}
