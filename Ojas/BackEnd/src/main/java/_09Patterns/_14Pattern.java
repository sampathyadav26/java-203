package _09Patterns;

public class _14Pattern {

	public static void main(String[] args) {
		int n=5,x = 0;	
		for(int i=1;i<=5;i++) {
			x = n-i+1;
			for(int j=1;j<=5;j++) {
				System.out.print(x+" ");
				x=x+n;
			}
			
			System.out.println(" ");
		}

	}

}
