package Strings;
class nani{
	public String name;
	nani(String name){
		this.name = name;
	}
}
public class Test {

	public static void main(String[] args) {
		
		String s4 = "hyd";
		String s3 = "hyd";
		System.out.println(s3.hashCode());
		System.out.println(s4.hashCode());
		
		nani s1 = new nani("abc");
		nani s2 = new nani("abc");
		
		System.out.println(s1);
		System.out.println(s2 );
	}

}
