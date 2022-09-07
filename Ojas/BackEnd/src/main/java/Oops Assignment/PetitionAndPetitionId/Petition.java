package PetitionAndPetitionId;

public class Petition {
	int PetitionId;
	String Name;
	String DateRegistered;
	String Location;
	String City;
	String ProblemDescription;
	boolean Status;
	
	public Petition(int petitionId, String name, String dateRegistered, String location, String city,
			String problemDescription, boolean status) {

		PetitionId = petitionId;
		Name = name;
		DateRegistered = dateRegistered;
		Location = location;
		City = city;
		ProblemDescription = problemDescription;
		Status = status;
	}
}
