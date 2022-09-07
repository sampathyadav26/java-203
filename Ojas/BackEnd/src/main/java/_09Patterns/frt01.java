package _09Patterns;

public class frt01 {

	public static void main(String[] args) {
		
		int sp =4, str=1;
		
		for(int i=1;i<=5;i++) {
			
			for(int j=1;j<=sp;j++) {
				System.out.print(" ");
			}
			for(int k=1;k<=str;k++) {
				System.out.print("*");
			}
			System.out.println(" ");
			sp--;
			str+=2;
		}
	}
}
