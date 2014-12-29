package coreservlets;

/** Gives info on the jQuery team members. Names and pics taken from
 *  http://jquery.org/team, but email addresses are not real.
 */

public class ContactUtils {
  private static Contact[] jQueryContacts = {
    new Contact("John", "Resig", "jresig3@example.com",
                "http://static.jquery.com/org/images/team/john.jpg"),
    new Contact("Brandon", "Aaron", "brandon@example.com",
                "http://static.jquery.com/org/images/team/brandon.jpg"),
    new Contact("Jorn", "Zaefferer", "jz@example.com",
                "http://static.jquery.com/org/images/team/joern.jpg"),
    new Contact("Yehuda", "Katz", "yehuda.katz@example.com",
                "http://static.jquery.com/org/images/team/yehuda.jpg"),
    new Contact("Dave", "Methvin", "dave_methvin@example.com",
                "http://static.jquery.com/org/images/team/dave.jpg"),
    new Contact("Richard", "Worth", "rworth5@example.com",
                "http://static.jquery.com/org/images/team/richard.jpg"),
    new Contact("Scott", "Gonzalez", "scottg@example.com",
                "http://static.jquery.com/org/images/team/scott.jpg"),
    new Contact("Todd", "Parker", "toddparker@example.com",
                "http://static.jquery.com/org/images/team/todd.jpg"),
    new Contact("Mike", "Hostetler", "hostetlerm@example.com",
                "http://static.jquery.com/org/images/team/mike-hostetler.jpg"),
    new Contact("Leah", "Silber", "silber@example.com",
                "http://static.jquery.com/org/images/team/leah.jpg"),
    new Contact("Rey", "Bango", "rbango4@example.com",
                "http://static.jquery.com/org/images/team/rey.jpg"),
    new Contact("Karl", "Swedberg", "k.swedberg@example.com",
                "http://static.jquery.com/org/images/team/john.jpg"),
    new Contact("Ralph", "Whitbeck", "whitbeck7@example.com",
                "http://gravatar.com/avatar/67bb840defedcdc3dc5da0b3c4e3c5db?s=76"),
    new Contact("Paul", "Irish", "paul.irish.7@example.com",
                "http://static.jquery.com/org/images/team/paul-irish.jpg"),
    new Contact("Cody", "Lindley", "codyl@example.com",
                "http://static.jquery.com/org/images/team/cody.jpg"),
    new Contact("Jonathan", "Sharp", "jsharp@example.com",
                "http://static.jquery.com/org/images/team/jonathan.jpg"),
    new Contact("Scott", "Jehl", "scott_jehl@example.com",
                "http://static.jquery.com/org/images/team/scott-jehl.jpg"),
    new Contact("Doug", "Neiner", "neiner@example.com",
                "http://jquery.org/wp-content/uploads/2010/01/doug-neiner.jpg"),
    new Contact("Mike", "Alsup", "alsup2@example.com",
                "http://gravatar.com/avatar/bc173576aa576adace923970043ac31f?s=76")
  };
  
  public static Contact[] jQueryContacts() {
    return(jQueryContacts);
  }

  private ContactUtils() {}
}
