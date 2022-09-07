package Assignment5;

public class ChildPass extends OneTime {
	double discount = 50;
	public void printChildPass(){
		Fare fare = new Fare();
		double pfare = fare.PrintFare();
		double res = pfare-(pfare*(discount/100));
		System.out.println("After Discount ChildPass Fare is:"+res);
	}

}
