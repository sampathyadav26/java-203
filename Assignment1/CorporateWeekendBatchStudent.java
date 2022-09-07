package Assignment1;

public class CorporateWeekendBatchStudent extends Assignment1 {

	public double calculateFee(String course)
	{
		double fee=25000;
		if(course.equals("java"))
		{
			fee=15000;
		}
		else if(course.equals("UI"))
		{
			fee=12000;
		}
		else if(course.equals("testing"))
		{
			fee=1000;
		}
		return fee;
	}
}
