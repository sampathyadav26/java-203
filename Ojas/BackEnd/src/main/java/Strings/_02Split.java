package Strings;

public class _02Split {

	public static void main(String[] args) {
		String str = "Thexyzwebsitexyzisxyzsoftwaretestingxyzhelp";
		String[] split = str.split("xyz");
		for(String obj: split) {
			System.out.println(obj);
		}
		
		System.out.println("**********IndexOF()**************");
		String str1 = "Saket Saurav "+ "performing a search";
		System.out.println(str);
		System.out.println("index of 'p' is "+ str1.indexOf('p'));
		System.out.println("index of 'u' is "+ str1.indexOf('u'));
		System.out.println("last index of 'S' is "+ str1.lastIndexOf('S'));
		System.out.println("last index of 's' is "+ str1.lastIndexOf('s'));
		
		System.out.println("**********String Reverse**************");
		String stri = "pleh gnitset eraw tfos";
		StringBuffer sb = new StringBuffer(stri);
		sb.reverse();
		System.out.println("Using Inbuilt Method="+sb);
		
		//using iteration
		char[] try1 = stri.toCharArray();
		for(int i=try1.length-1;i>=0;i--) {
			System.out.print(try1[i]);
		}
		
		//Without Using Inbuilt Methods
		String nstr = "";
		char ch;
		for(int i=0;i<stri.length();i++) {
			ch = stri.charAt(i);
			nstr = ch+nstr;
		}
		System.out.println("Reversed word: "+ nstr);
		
		System.out.println("**********String Replace**************");
		String str2 = "Shot";
		String replace = str2.replace('o', 'u');
		System.out.println("Before Replace:"+str2);
		System.out.println("After Replace:"+replace);
		
		System.out.println("**********Sub String Method**************");
		System.out.println(str2.substring(1,3));
		
		System.out.println("**********String Replace**************");
		String str3 = "Saket Saurav";
		String str4 = str3.replace("Saurav","");
		System.out.println(str3);
		System.out.println(str4);
	}

}
