package _09Patterns;

public class _19Pattern {

	public static void main(String[] args) {
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=5;j++) {
				if(i==j || i+j==6 || (i*j)%2==1) {
					System.out.print("1");
				}else {
					System.out.print("0");
				}
			}
			System.out.println();
		}
	}

}
