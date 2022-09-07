package BasicPrograms;

import java.util.Scanner;

public class FloyedTraingle {

	public static void main(String[] args) {
		
		int k=1;
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the number");
		int n = sc.nextInt();
		
		for(int i=1;i<=n;i++) {
			for(int j=1;j<=i;j++) {
				System.out.print(" "+k);
				k++;
			}
			System.out.println(" ");
		}

	}

}
