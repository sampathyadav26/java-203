package _09Patterns;

public class _07Pattern {
	public static void main(String[] args) {
		int n = 5,k=1;
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=5;j++) {
				System.out.printf("%3d",k);//it defines the spaces
				k+=2;
			}
			
			System.out.println(" ");
		}
	}
}
