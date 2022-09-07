package Practise;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Practise {
	
	public static void main(String[] args) {

//	        int[] numbers = {4, 9, 7, 3, 2, 8};
//	        String str[] = {"sun","mon","tues"};
//	        int element = 8;
//	        int index = 0;
//	        
//	        String ele = "tues";
//	         
//	        int i = 0;
//	        while(i < numbers.length) {
//	            if(numbers[i] == element) {
//	                index = i;
//	                break;
//	            }
//	            i++;
//	        }
	        
//	        while(i < str.length) {
//	            if(str[i] == ele) {
//	                index = i;
//	                break;
//	            }
//	            i++;
//	        }
//	         
//	        System.out.println("Index of "+element+" is : "+index);
		Scanner scan = new Scanner(System.in);
		//System.out.println("enter the string");
		//String s1 = scan.next();
	        String TYPES[]= {"nano","kia","BMW"};
	        //String carName = s1;
	        		int index = -1;
	        		for (int i=0;i<TYPES.length;i++) {
	        			System.out.println(TYPES[i]);
//	        		    if (TYPES[i].equals(carName)) {
//	        		        index = i;
//	        		        System.out.println(index);
//	        		        System.out.println("enter the index");
//	        		        int n = scan.nextInt();
//	        		        
//	        		    }
	        			System.out.println("Enter the index");
	        			int s2 = scan.nextInt();
	        			System.out.println(TYPES[s2]);
	        			
	        		}
	    }
		
}
