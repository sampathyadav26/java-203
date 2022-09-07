package Strings;

public class TestDemo {

	public static void main(String[] args) {
		String s1 = "Hello";
		System.out.println(s1.hashCode());
		String s2 = new String("Hello");
		System.out.println(s2.hashCode());
		String s3 = new String("Hello");
		System.out.println(s3.hashCode());
		if(s1==s2) {
			System.out.println("s1 and s2 are equals");
		}else {
			System.out.println("s1 and s2 are not equals");
		}
		if(s2.equals(s3)) {
			System.out.println("s2 are equals");
		}else {
			System.out.println("s2 are not equals");
		}
	}

}
