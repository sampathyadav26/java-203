package _14LCM;

import java.util.Scanner;

public class _01LCM {

	public static void main(String[] args) {
		int lcm;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter frt Number:");
		int n1=sc.nextInt();
		
		System.out.println("Enter Sec Number:");
		int n2=sc.nextInt();

		 lcm = (n1 > n2) ? n1 : n2;
		 
		 while(true) {
		      if( lcm % n1 == 0 && lcm % n2 == 0 ) {
		        System.out.printf("The LCM of %d and %d is %d.", n1, n2, lcm);
		        break;
		      }
		      ++lcm;
		    }
	}

}
