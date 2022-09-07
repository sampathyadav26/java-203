package _09Patterns;

public class _17Pattern {

	public static void main(String[] args) {
		int n=1,x=0;
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=5;j++) {
				System.out.print(n+" ");
				n+=2;
				x=n;
			}
			n = n-8;
			System.out.println("");
		}
	}

}
