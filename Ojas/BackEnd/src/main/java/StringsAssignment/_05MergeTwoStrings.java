package StringsAssignment;

import java.util.Arrays;

public class _05MergeTwoStrings {

		public static void main(String[] args) {
			int[] firstArray = {56,78,90,32,67,12}; 
			int[] secondArray = {11,14,9,5,2,23,15};  
			
			int length = firstArray.length + secondArray.length; 
			int[] mergedArray = new int[length];     
			int pos = 0;  
			for (int element : firstArray) //copying elements of firstArray  using for-each loop  
			{  
				mergedArray[pos] = element;  
				pos++;    //increases position by 1
				
			}  
			for (int element : secondArray) //copying elements of secondArray using for-each loop  
			{  
				mergedArray[pos] = element;  
				pos++;
			}  
			System.out.println(Arrays.toString(mergedArray));
			
		}
}
