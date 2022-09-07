package StringsAssignment;

public class _12ContainsOnlyLettersAndDigits {

	public static void main(String[] args) {

		String s1="eshwar198#%$@";
		int count = 0,dig = 0;
		for(int i=0;i<=s1.length()-1;i++)
		{
			char ch=s1.charAt(i);
			
			if(Character.isAlphabetic(ch))
			{
				count++;
			}else if(Character.isDigit(ch)) {
				dig++;
			}
		}
			System.out.println("Number of Characters present in string is:"+count);
			System.out.println("Number of Digits present in string is:"+dig);

	}

}
