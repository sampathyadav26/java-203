package BasicPrograms;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		int fact=1,i=1;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a number..");
		int n = sc.nextInt();
		
		while(n>=i) {	//n=5      5>=1    5>=2  5>=3  5>=4  5>=5
			fact = fact*i;		// = 1*1   1*2    2*3   6*4   24*5=120
			i++;				// 2
		}
		System.out.println(fact);
	}

}
