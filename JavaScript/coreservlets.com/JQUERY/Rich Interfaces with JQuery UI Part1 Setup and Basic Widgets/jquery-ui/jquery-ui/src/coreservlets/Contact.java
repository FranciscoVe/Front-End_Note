package coreservlets;

public class Contact {
  private final String firstName, lastName, 
                       email, image;

  public Contact(String firstName, String lastName, 
                 String email, String image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.image = image;
  }

  public String getFirstName() {
    return(firstName);
  }

  public String getLastName() {
    return(lastName);
  }

  public String getEmail() {
    return(email);
  }

  public String getImage() {
    return(image);
  }
  
  public String getLabel() {
    return(firstName + " " + lastName);
  }
  
  public String getValue() {
    return(String.format("%s %s <%s>",
                         firstName, lastName, email));
  }
}
