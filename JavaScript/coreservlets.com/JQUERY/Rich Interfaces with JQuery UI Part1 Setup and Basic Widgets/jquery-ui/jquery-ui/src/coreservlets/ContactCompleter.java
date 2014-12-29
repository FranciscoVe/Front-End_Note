package coreservlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import org.json.*;

/** From <a href="http://courses.coreservlets.com/Course-Materials/">the
 *  coreservlets.com tutorials on servlets, JSP, Struts, JSF, Ajax, GWT, and Java</a>.
 */

public class ContactCompleter extends HttpServlet {
  public void doGet(HttpServletRequest request,
                    HttpServletResponse response)
      throws ServletException, IOException {
    String namePrefix = request.getParameter("term");
    List<Contact> contacts = findContacts(namePrefix);
    response.setContentType("application/json");
    PrintWriter out = response.getWriter();
    out.print(new JSONArray(contacts));
  }
  
  private List<Contact> findContacts(String namePrefix) {
    namePrefix = namePrefix.toUpperCase();
    List<Contact> contacts = new ArrayList<Contact>();
    Contact[] jQueryContacts = ContactUtils.jQueryContacts();
    for(Contact contact: jQueryContacts) {
      String firstName = 
        contact.getFirstName().toUpperCase();
      String lastName = 
        contact.getLastName().toUpperCase();
      if(firstName.startsWith(namePrefix) ||
         lastName.startsWith(namePrefix)) {
        contacts.add(contact);
      }
    }
    return(contacts);
  }
}