package _09Patterns;

public class _12Pattern {

	public static void main(String[] args) {
		int n=5,x;
		for(int i=1;i<=n;i++) {
			x=i;
			for(int j=1;j<=n;j++) {
				System.out.printf(x+" "+" ");
				x+=n;
			}
			System.out.println();
		}
	}

}
