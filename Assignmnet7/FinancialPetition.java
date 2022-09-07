package Assignmnet7;

public class FinancialPetition extends Petition {
	double Amount;

	
	public FinancialPetition(int petitionId, String name, String dateRegistered, String location, String city,
			String problemDescription, boolean status, double amount2) {
		super(petitionId, name, dateRegistered, location, city, problemDescription, status);
		Amount=Amount;
		
	}
	public void display()
	{
		System.out.println("PetitionId "+PetitionId);
		System.out.println("Petition Name "+Name);
		System.out.println("Petition DateRegistered "+DateRegistered);
		System.out.println("Petition Location "+Location);
		System.out.println("Petition ProblemDescription "+ProblemDescription);
		System.out.println("Petition Status "+Status);
		System.out.println("Petition Amount :"+Amount);
		
		
	}
	

}
