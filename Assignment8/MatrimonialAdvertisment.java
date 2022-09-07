package Assignment8;

import java.util.Scanner;

public class MatrimonialAdvertisment extends Advertisment {
	public String gender;
	public int age;
	public String occupation;

	public void details() {
		Scanner s = new Scanner(System.in);
		System.out.print("Enter Gender :");
		String gender = s.next();
		this.gender = gender;
		System.out.print("Enter Age :");
		int age = s.nextInt();
		this.age = age;
		System.out.print("Enter Occupation :");
		String occupation = s.next();
		this.occupation = occupation;
	}

}
