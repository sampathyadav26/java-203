package StringsAssignment;

public class _11StringContainsLetters {

	public static void main(String[] args) {
		
		String s1="eshwar198";
		int count = 0;
		for(int i=0;i<=s1.length()-1;i++)
		{
			char ch=s1.charAt(i);
			
			if(Character.isAlphabetic(ch))
			{
				count++;
			}
		}
			System.out.println("Number of Characters present in string is:"+count);

	}

}
