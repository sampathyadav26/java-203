package FareAndDestination;

import java.util.Scanner;

public class Fare {
	 double Origin= 0;
	 double Destination;	
	
	public static int CalculateFare(int kms){
		if(kms<10){
			kms = kms*5;
			//System.out.println("Your Fare is"+kms);
		}else if(kms>=11 && kms<=50){
			kms = kms*10;
		}else if(kms>=51 && kms<=100){
			kms = kms*15;
		}else{
			kms = kms*18;
		}return kms;
	}
	public static int PrintFare (){ 
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Destination in KMS..?");
		int num = sc.nextInt();
		System.out.println("fare is:"+CalculateFare(num));
		return CalculateFare(num);
	}
}
