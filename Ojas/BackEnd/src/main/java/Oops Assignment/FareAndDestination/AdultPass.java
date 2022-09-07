package FareAndDestination;

public class AdultPass extends OneTime{
	public void printAdultPass(){
		Fare fare = new Fare();
		double pfare = fare.PrintFare();
		System.out.println("After Discount AdultPass Fare is:"+pfare);
	}
}
