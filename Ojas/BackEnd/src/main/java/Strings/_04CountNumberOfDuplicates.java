package Strings;

//Java program to Count Number of Duplicate Words in String
public class _04CountNumberOfDuplicates {

	public static void  duplicateWords(String inputstring) {
		String words[] = inputstring.split(" ");
	
		String temp="";
		int count =0;
		for(int i=0;i<words.length;i++) {
			for(int j=i+1;j<words.length;j++) {
				if(words[i].equals(words[j])) {
					count++;
				}
			}
			System.out.println(words[i]);
		}
	}
	

	public static void main(String[] args) {
		 duplicateWords("java guides java");
	}

}
