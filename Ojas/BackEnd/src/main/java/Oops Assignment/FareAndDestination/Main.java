package FareAndDestination;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Fare fare = new Fare();
		SeasonalPass sp = new SeasonalPass();
		OneTime ot = new OneTime();
		FreePass free = new FreePass();
		StudentSeasonalPass ssp = new StudentSeasonalPass();
		ChildPass cp = new ChildPass();
		AdultPass  ap = new AdultPass ();
		PhysicallyHandicappedPass php = new PhysicallyHandicappedPass();
		SeniorsPass sep = new SeniorsPass();
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Your Choice:");
		System.out.println("Enter 1 to Fare:");
		System.out.println("Enter 2 to SeasonalPass:");
		System.out.println("Enter 3 to OneTimePass:");
		System.out.println("Enter 4 to FreePass:");
		System.out.println("Enter 5 to StudentSeasonalPass:");
		System.out.println("Enter 6 to ChildPass:");
		System.out.println("Enter 7 to FreePass:");
		System.out.println("Enter 8 to AdultPass:");
		System.out.println("Enter 9 to PhysicallyHandicappedPass:");
		System.out.println("Enter 10 to SeniorsPass:");
		 
		int n = sc.nextInt();
		
		
			switch(n){
			case 1:fare.PrintFare();
					break;
			case 2:sp.printSeaonalPass();
					break;
			case 3:ot.printOneTimePass();
					break;
			case 4:free.printFreePass();
					break;
			case 5:ssp.printStudentSeasonalPass();
					break;
			case 6:cp.printChildPass();
					break;
			case 7:free.printFreePass();
					break;
			case 8:ap.printAdultPass();
					break;
			case 9:php.printPhysicallyHandicappedPass();
					break;
			case 10:sep.printSeniorsPass();
					break;
			default:System.out.println("Invalid Option Pls Choose Correct One");
			}
		
	}
}
