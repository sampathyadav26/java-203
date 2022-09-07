package Assignment2;

import java.sql.Date;
import java.util.Scanner;

public class SecondAssignment {
	
	public String dayName;
	String week[] = { "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" };

	public String getDayName() {
		return dayName;
	}

	public void setDayName(String dayName) {
		this.dayName = dayName;
		Scanner s = new Scanner(System.in);
		System.out.println("Enter Your Day:");
		String choice = s.next();
		String name = choice.toUpperCase();
		
			switch (name) {
				case "SUNDAY":
				System.out.println(this.dayName = "SUN");
				break;
				
				case "MONDAY":
				System.out.println(this.dayName = "MON");
				break;
				
				case "TUESDAY":
				System.out.println(this.dayName = "TUE");
				break;
				
				case "WEDNESDAY":
				System.out.println(this.dayName = "WED");
				break;
				
				case "THURSDAY":
				System.out.println(this.dayName = "THU");
				break;
				
				case "FRIDAY":
				System.out.println(this.dayName = "FRI");
				break;
				
				case "SATURDAY":
				System.out.println(this.dayName = "SAT");
				break;
				
				default:System.out.println("the value in dayName :" + (this.dayName = null));
			}
	}



	public static void main(String[] args) {
		SecondAssignment obj = new SecondAssignment();
		obj.setDayName(obj.dayName);
		obj.getNextDay();
		obj.getPreviousDay();
		Scanner s = new Scanner(System.in);
		System.out.println("enter the number ");
		int number = s.nextInt();
		obj.addToCurrentDay(number);
	}

	public void getNextDay() {
		String name = this.dayName;
		for (int i = 0; i < week.length; i++) {
			if (week[i] == name) {
						System.out.println("next dayname:" + week[i + 1]);
				}
				else
				{
					i=0;
					System.out.println("next dayname:"+week[i]);
					break;
				}
			}
		}
	

	public void getPreviousDay() {
		String name1 = this.dayName;
		for (int i = 0; i < week.length; i++) {
			if (week[i] == name1) {
				if (i != 0) {
					System.out.println("previous dayname:" + week[i - 1]);
				} else {
					i = (week.length - 1);
					System.out.println("previous dayname:" + week[i]);
				}
			}
		}
	}

	public void addToCurrentDay(int noOfDays) {
		for (int i = 0; i < week.length; i++) {
			if (week[i] == this.dayName) {
				if (noOfDays > 0) {
					if (i + noOfDays <= 6) {
						i += (noOfDays);
							System.out.println("days after adding the number: " + week[i]);
							break;
					} 
					else {
						i = i - (7 - noOfDays);
							System.out.println("days after adding the number: " + week[i]);
							break;
					}
				}
				else {
					int a=7+noOfDays;
						System.out.println("days before the number:"+week[i+a]);
					}
				}
			}
		}
}
