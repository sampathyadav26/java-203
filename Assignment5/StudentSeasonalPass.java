package Assignment5;

public class StudentSeasonalPass extends SeasonalPass {
	double discount = 30;

	public void printStudentSeasonalPass() {
		Fare fare = new Fare();
		double pfare = fare.PrintFare();
		double res = pfare - (pfare * (discount / 100));
		System.out.println("After Discount StudentSeasonalPass Fare is:" + res);
	}

}
