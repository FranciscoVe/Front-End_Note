package coreservlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

/** MVC-based servlet to return some random numbers and colors.
 *  <p>
 *  From <a href="http://courses.coreservlets.com/Course-Materials/">the
 *  coreservlets.com tutorials on servlets, JSP, Struts, JSF, Ajax, GWT, 
 *  Spring, Hibernate/JPA, and Java programming</a>.
 */

public class ShowNumbers extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request,
                    HttpServletResponse response)
      throws ServletException, IOException {
    response.setHeader("Cache-Control", "no-cache");
    response.setHeader("Pragma", "no-cache");
    String fg = ColorUtils.randomColor();
    request.setAttribute("fg", fg);
    String bg = ColorUtils.randomColor();
    request.setAttribute("bg", bg);
    String fontSize = "" + (10 + RandomUtils.randomInt(30));
    request.setAttribute("fontSize", fontSize);
    double[] nums = 
      { Math.random(), Math.random(), Math.random() };
    request.setAttribute("nums", nums);
    response.setContentType("application/json");
    String outputPage = "/WEB-INF/results/show-nums.jsp";
    RequestDispatcher dispatcher =
      request.getRequestDispatcher(outputPage);
    dispatcher.include(request, response);
  }
}
