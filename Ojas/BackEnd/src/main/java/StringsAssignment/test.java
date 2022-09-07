package StringsAssignment;

public class test {

	public static void main(String[] args) {
	int count=0;
	String s1 = "java java Developer java";
	String[] s2 = s1.split(" ");
	
		for(int i=0;i<s2.length   ;i++) {
			if(s2[i].equals(s2[i+1])) {
				System.out.println("-----");
				count++;
			}
			else {
				
			}
		}
		System.out.println(count);
	}

}
