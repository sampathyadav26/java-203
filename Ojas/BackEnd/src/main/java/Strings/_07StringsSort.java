package Strings;

import java.util.Scanner;

public class _07StringsSort {

	public static void main(String[] args) {
		
		String arr[] = {"xyz","pqr","abc","dog"};
		int n = arr.length;
		
		
		for(int i=0;i<n-1;i++) {
			for(int j=0;j<n-1-i;j++) {
				if(arr[j].compareToIgnoreCase(arr[j+1])>0) {
					String temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		
		for(String k:arr) {
			System.out.println(k);
		}
	}

}
