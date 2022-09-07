package Assignment1;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Scanner;

public class FrtAssignment {

	public static double calculateAge(int birthMonth,int birthYear) {

		double age;
		Calendar cal = Calendar.getInstance();
		
		double year = cal.get(Calendar.YEAR);
		double month = cal.get(Calendar.MONTH);

		if((birthMonth<0)||(birthYear<0)) 
		{ 
			return -1;
		}
		else if(birthYear>year) 
		{
			return -2;
		}
		else
			age= ((year-(double)birthYear)+((month-(double)birthMonth)/12));
		return age;
}
	public static void main(String[] args) {
		
		Scanner s=new Scanner(System.in);
		System.out.println("enter the month");
		int birthMonth=s.nextInt();
		
		System.out.println("enter the year");
		int birthYear=s.nextInt();
		
		double age=calculateAge(birthMonth,birthYear);
		System.out.println("your age is:"+age);
	}  
		
}
