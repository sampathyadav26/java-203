package Inheritance;

public class SecondInheritance extends FrtInheritance{

	int c;
	SecondInheritance(int a, int b,int c) {
		super(a, b);
		this.c=c;
	}
	
	public void info() {
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}

}
