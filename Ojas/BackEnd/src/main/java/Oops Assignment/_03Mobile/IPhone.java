package _03Assignment;


public class IPhone extends Nokia{

	public void IPhoneMethod() {
		System.out.println("Iphone Methods and properties are");
	}
	public static void main(String[] args) {
		IPhone sam = new IPhone();
		sam.IPhoneMethod();
		sam.Dial();
		sam.GetIEMICode();
		sam.ConnectBlueTooth();
		sam.GetWIFIConnection();
		sam.Receive();
		sam.SendMessage();
	}
}
