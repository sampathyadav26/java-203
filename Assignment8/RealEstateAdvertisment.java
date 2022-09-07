package Assignment8;

import java.util.Scanner;

public class RealEstateAdvertisment extends Advertisment {
	public String realEstateType;
	public int size;
	public long price;

	public void details() {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter Real Estate Type");
		String type = s.next();
		this.realEstateType = type;
		System.out.print("Enter size in sq.ft");
		int size = s.nextInt();
		this.size = size;
		System.out.print("Enter price");
		long price = s.nextLong();
		this.price = price;
	}
}