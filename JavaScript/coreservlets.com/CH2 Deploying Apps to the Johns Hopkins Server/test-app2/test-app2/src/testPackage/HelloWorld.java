package testPackage;

import java.io.*; 
import javax.servlet.*;
import javax.servlet.http.*;

/** Very simplistic servlet that generates plain text.
 *  Run it with the address given in web.xml. 
 */

public class HelloWorld extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request,
                    HttpServletResponse response)
      throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    out.println("Hello World");
  }
}
