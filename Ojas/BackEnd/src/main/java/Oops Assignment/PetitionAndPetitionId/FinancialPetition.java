package PetitionAndPetitionId;

public class FinancialPetition extends Petition{
	String Amount;
	
	public FinancialPetition(int petitionId, String name, String dateRegistered, String location, String city,
			String problemDescription, boolean status,String amont) {
		super(petitionId, name, dateRegistered, location, city, problemDescription, status);
		Amount = amont;
	}

	
	public void display(){
		System.out.println("************Welcome to FinancialPetition************");
		System.out.println("PetitionId is:"+PetitionId);
		System.out.println("Petition Name is:"+Name);
		System.out.println("Petition DateRegistered is:"+DateRegistered);
		System.out.println("Petition Location is:"+Location);
		System.out.println("Petition City is:"+City);
		System.out.println("Petition ProblemDescription is:"+ProblemDescription);
		System.out.println("Petition Status is:"+Status);
		System.out.println("Petition amont is:"+Amount);
		System.out.println("****************************************************");
	}
}
