package _07NCRAndNPR;

import java.util.Scanner;
//formula n!/(n-r)! * r!
//formula n!/(n-r)!
public class _01NcrAndNpr {

	public static void main(String[] args) {
		int factn =1,factp=1,factr=1;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter The Value Of N:");
		int n = sc.nextInt();
		
		System.out.println("Enter The Value Of P:");
		int r = sc.nextInt();
		
		for(int i=1;i<=n;i++) {
			factn = factn*i;
		}
		System.out.println("Factorial Of n is="+factn);
		
		for(int i=1;i<=r;i++) {
			factp = factp*i;
		}
		System.out.println("Factorial of r is="+factp);
		
		int factnAndFactp = n-r;
		
		for(int i=1;i<=factnAndFactp;i++) {
			factr = factr*i;
		}
		
		System.out.println("Factorial of (n-r) is="+factr);
		
		int ncr = factr*factp;
		
		int res = factn/ncr;
		
		System.out.println("ncr is="+res);
		
		System.out.println("***********NPR***************");
		
		int npr = factn/factr;
		System.out.println("npr value is="+npr);
	}

}
