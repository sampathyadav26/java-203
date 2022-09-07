package SearchFunctionality;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Search {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		List<String> versions = new ArrayList<>(); 
		versions.add("sunday"); 
		versions.add("monday"); 
		versions.add("tuesday"); 
		versions.add("wednsday"); 
		versions.add("Friday"); 
		versions.add("suterday");

		System.out.println("Enter day name:");
		String s1 = sc.next();
		System.out.println(s1);
		
		String first = versions.stream() .filter(s -> s.contains("s1")) .findFirst().get(); 
		System.out.println(first);	
		
	}

}
