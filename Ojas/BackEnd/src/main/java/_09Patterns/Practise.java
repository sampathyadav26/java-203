package _09Patterns;

public class Practise {

	public static void main(String[] args) {
	
		
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=10;j++) {
				if(i>=j || i+j>=11) {
					System.out.print("*");
				}
				else {
					System.out.print(" ");
				}
			}
			System.out.println(" ");
		}
	}

}
