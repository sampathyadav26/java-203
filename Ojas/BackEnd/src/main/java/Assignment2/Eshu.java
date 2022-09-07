package Assignment2;

import java.util.Scanner;

public class Eshu {
	Scanner sc = new Scanner(System.in);
	String s1;
	int i;
	public String dayName;
	String week[] = { "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" };
	
	public static void main(String[] args) {
		Eshu obj = new Eshu();
		obj.setDayName(obj.dayName);
		obj.getNextDay();
		obj.getPreviousDay();
		obj.addToCurrentDay();
	}
	
	
	public void setDayName(String dayName) {
		this.dayName = dayName;
		Scanner s = new Scanner(System.in);
		
		System.out.println("Enter Your Day:");
		String choice = s.next();
		
		
		String name = choice.toUpperCase();
		s1 = name.substring(0,3);
	
			switch (s1) {
				case "SUN":
				System.out.println(this.dayName = "SUN");
				break;
				
				case "MON":
				System.out.println(this.dayName = "MON");
				break;
				
				case "TUE":
				System.out.println(this.dayName = "TUE");
				break;
				
				case "WED":
				System.out.println(this.dayName = "WED");
				break;
				
				case "THU":
				System.out.println(this.dayName = "THU");
				break;
				
				case "FRI":
				System.out.println(this.dayName = "FRI");
				break;
				
				case "SAT":
				System.out.println(this.dayName = "SAT");
				break;
				
				default:System.out.println("the value in dayName :" + (this.dayName = null));
			}		
		}
			public String getDayName( ) {
				this.dayName = dayName;
				return dayName;
			}
			public void getNextDay(){
					for(i=0;i<week.length;i++) {
						if(week[i].equals(dayName)) {
							if(week[i] == "SAT") {
								System.out.println("Next Day is:"+"SUN");
							}else {
								System.out.println("NextDay is:"+week[i+1]);
							}
						}
					}
			}
			
			public void getPreviousDay(){
				for(i=0;i<week.length-1;i++) {
					if(week[i].equals(dayName)) {
						if(week[i] == "SUN") {
							System.out.println("Previous is:"+"SAT");
						}else {
							System.out.println("Previous is:"+week[i-1]);
						}	
					}
				}
			}
			
			public void  addToCurrentDay() {
				int indexvalue = 0;
				
				System.out.println("Enter the Number:");
				int ele = sc.nextInt();
				for(i=0;i<week.length;i++) {
					//System.out.println(i);
					if(i == ele) {
						i = ele+ele;
//						System.out.println(res);
						System.out.println(week[i]);
						//System.out.println(week[ele]);
					}
				}
				
			}
}
