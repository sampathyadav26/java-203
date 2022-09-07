package _11PrimeNumber;

import java.util.Scanner;

public class _01PrimeNumber {

	public static void main(String[] args) {
	int count=0;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Number....");
		
		int n = sc.nextInt();
		for(int i=1;i<=n;i++) {
			if(n%i==0) {
				count++;
			}
		}
		if(count == 2) {
			System.out.println("The Given Number is Prime");
		}
		else {
			System.out.println("Not a Prime.....");
		}
	}

}
