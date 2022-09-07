package Assignment6;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		System.out.println("enter your choice");
		System.out.println("1.bike");
		System.out.println("2.auto");
		System.out.println("3.car");
		Scanner s = new Scanner(System.in);
		int choice = s.nextInt();
		switch (choice) {
		case 1:
			System.out.println("enter reg number");
			String regNum1 = s.next();
			Bike b = new Bike(regNum1);

			break;
		case 2:
			System.out.println("enter reg number");
			String regNum2 = s.next();
			Auto a = new Auto(regNum2);
			break;
		case 3:
			System.out.println("enter reg number");
			String regNum3 = s.next();
			Car c = new Car(regNum3);
			break;
		default:
			System.out.println("enter valid choice");

		}

	}
}
