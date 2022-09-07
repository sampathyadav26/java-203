package Arrays;
//Product of array using methods
import java.util.Arrays;
import java.util.Scanner;

class Product implements Comparable<Product>{
	public int id;
	public double price;
	public String name;
	public int qty;
	public Product(int id, String name, int qty, double price) {
		this.id = id;
		this.price = price;
		this.name = name;
		this.qty = qty;
	}
	
	public String toString(){
		return id+"\t"+name+"\t"+qty+"\t"+price;
	}

	public int compareTo(Product p) {
		// TODO Auto-generated method stub
		return name.compareTo(p.name);
	}
	

	
}

public class _04SingleDimensionalArrayProduct {

	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Product Array Size ?");
		int size = sc.nextInt();
		Product[] products = new Product[size];
		System.out.println("Enter Product Elements ?");
		for(int i=0;i<size;++i){
			System.out.println("Enter Product Id ?");
			int id = sc.nextInt();
			
	        System.out.println("Enter Product Name ?");
	        String name = sc.next();
	        
	        System.out.println("Enter Product Qty ?");
	        int qty = sc.nextInt();
	        
	        System.out.println("Enter Product Price ?");
	        double price = sc.nextDouble();
	        
	        products[i]=new Product(id,name,qty,price);
		}
		System.out.println("-----Product List----");
		for(Product product: products){
			System.out.println(product);
		}
		
		System.out.println("-----Sort Product List----");
		Arrays.sort(products);
		for(Product product: products){
			System.out.println(product);
		}

	}

}
