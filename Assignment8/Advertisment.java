package Assignment8;

import java.util.Scanner;

public class Advertisment {
	int AdvertismentId;
	String AdDescription;

	public static void main(String[] args) {
		// Advertisment advertisment =new Advertisment();
		MatrimonialAdvertisment mAds = new MatrimonialAdvertisment();
		RealEstateAdvertisment rAds = new RealEstateAdvertisment();
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your choice");
		System.out.println("1.Matrimonial Advertisment");
		System.out.println("2.RealEstateAdvertisment");
		int choice = sc.nextInt();
		switch (choice) {
		case 1:
			mAds.details();
			System.out.println("matrimony details");
			System.out.println("gender:" + mAds.gender);
			System.out.println("age:" + mAds.age);
			System.out.println("occupation:" + mAds.occupation);
			break;
		case 2:
			rAds.details();
			System.out.println("real estate details");
			System.out.println("real estate type:  " + rAds.realEstateType);
			System.out.println("size:" + rAds.size);
			System.out.println("price:" + rAds.price);
			break;
		default:
			System.out.println("enter valid id");
		}
	}
}
