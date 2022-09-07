package _09Patterns;

public class _16Pattern {

	public static void main(String[] args) {
		int n=1;
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=5;j++) {
				System.out.print(n+" ");
				n++;
			}
			n = n-4;
			System.out.println("");
		}

	}

}
