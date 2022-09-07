package StringsAssignment;

public class _20FirstNonRepeatedCharacter {

	public static void main(String[] args) {
		   String inputStr ="teerte";

	        for(char i :inputStr.toCharArray()){
		        if ( inputStr.indexOf(i) == inputStr.lastIndexOf(i)) {
		            System.out.println("First non-repeating character is: "+i);
		            break;
		        }
	        }
	}

}
