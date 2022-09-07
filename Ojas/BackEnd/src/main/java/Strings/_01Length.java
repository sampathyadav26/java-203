package Strings;

public class _01Length {

	public static void main(String[] args) {
		System.out.println("*********Length***************");
		String str = "Hydrabad";
		System.out.println(str.length());
		
		System.out.println("*********Concta***************");
		String str1 = "Software";
		String str2 = "Testing";
		System.out.println(str1+str2);
		System.out.println(str1.concat(str2));
		
		System.out.println("**********ToChar Array**************");
		String str3 = "Saket";
		char[] chars = str3.toCharArray();
		System.out.println(chars);
		for(int i= 0; i< chars.length; i++) {
			System.out.println(chars[i]);
		}
		
		System.out.println("**********CharAt**************");
		String str4 = "java string API";
		System.out.println(str4.charAt(0));
		System.out.println(str4.charAt(1));
		System.out.println(str4.charAt(2));
		System.out.println(str4.charAt(3));
		System.out.println(str4.charAt(4));
		System.out.println(str4.charAt(6));
		
		System.out.println("**********CompareTo**************");
		String str5 = "Zeus";
		String str6 = "Chinese";
		String str7 = "American";
		String str8 = "Indian";
		System.out.println(str5.compareTo(str6));
		
		System.out.println("**********Contains**************");
		String stri = "Softwaretestinghelp";
		String stri1 = "testing";
		String stri2 = "blog";
		System.out.println("testing is a part of Softwaretestinghelp: "+ stri.contains(stri1));
		System.out.println("blog is a part of Softwaretestinghelp: "+ stri.contains(stri2));
	}

}
