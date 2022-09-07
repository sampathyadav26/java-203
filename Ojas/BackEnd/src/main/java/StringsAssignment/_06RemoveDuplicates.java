package StringsAssignment;

import java.util.Arrays;

public class _06RemoveDuplicates {
		public static void main(String[] args) {
			int [] a1= {1,1,2,3,4,8,5,6,6};
			int len= a1.length;
			int temp[]=new int[a1.length];
			int j=0;
			
			for(int i=0;i<a1.length-1;i++)
			{
				if(a1[i] != a1[i+1])
				{
					temp[j++]=a1[i];
					//System.out.println(temp[j]);
				}
			}
			
			temp[j++] = a1[len-1];
			//System.out.println(temp[j]);
			for(int k=0;k < j;k++)
			{
				System.out.println(temp[k]);
			}
			
		}
}
