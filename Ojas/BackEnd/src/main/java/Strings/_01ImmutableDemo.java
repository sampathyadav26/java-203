package Strings;

class Emp{
	public int empid;
	public String ename;
	public double Sal;
	Emp(int empid, String ename, double sal) {
		this.empid = empid;
		this.ename = ename;
		this.Sal = sal;
		System.out.println(empid +" "+ename+" "+Sal);
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(Sal);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + empid;
		result = prime * result + ((ename == null) ? 0 : ename.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Emp other = (Emp) obj;
		if (Double.doubleToLongBits(Sal) != Double.doubleToLongBits(other.Sal))
			return false;
		if (empid != other.empid)
			return false;
		if (ename == null) {
			if (other.ename != null)
				return false;
		} else if (!ename.equals(other.ename))
			return false;
		return true;
	}
	
}

public class _01ImmutableDemo {
	public static void main(String[] args) {
		String s1 = "Hello";
		 s1 = s1+"hyd";
		String s2 = "Hyderabad";

		System.out.println(s1.hashCode());
		System.out.println(s2.hashCode());
		if(s1 == s1) {
 			System.out.println("s1 and s2 are equals");
                                		}else {
			System.out.println("s1 and s2 are not equals");
		}
		
		String str = new String("Eshu");
		String str1 = new String("Eshu");
		
		System.out.println("hash is:"+str.hashCode()+ " "+str1.hashCode());
		if(str == str1) {
			System.out.println("same");
		}else {
			System.out.println("Differ");
		}
		
		
		Emp emp = new Emp(10,"Eshwar",10000);
		Emp emp1 = new Emp(10,"Eshwar",10000);
		
		System.out.println(emp.hashCode());
		System.out.println(emp1.hashCode());
		
		if(emp.equals(emp1)) {
			System.out.println("emp and emp1 equals");
		}else {
			System.out.println("Emp and emp1 are not equals");
		}
	}
}
