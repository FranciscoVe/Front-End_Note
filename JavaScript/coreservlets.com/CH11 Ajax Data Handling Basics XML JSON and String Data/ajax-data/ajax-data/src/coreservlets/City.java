package coreservlets;

import java.util.*;

/** Information on a single city.
 *  <p>
 *  From <a href="http://courses.coreservlets.com/Course-Materials/">the
 *  coreservlets.com tutorials on servlets, JSP, Struts, JSF, Ajax, GWT, 
 *  Spring, Hibernate/JPA, and Java programming</a>.
 */

public class City {
  private String name;
  private int timeZone;
  private int pop;

  public City(String name, int timeZone, int pop) {
    setName(name);
    setTimeZone(timeZone);
    setPop(pop);
  }
  
  public String getTime() {
    Calendar time = new GregorianCalendar();
    time.add(Calendar.HOUR_OF_DAY, getTimeZone());
    return(String.format("%tr", time));
  }
  
  public String getName() {
    return (name);
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getPop() {
    return (pop);
  }

  public void setPop(int pop) {
    this.pop = pop;
  }
  
  public String getPopulation() {
    return(String.format("%,9d", getPop()));
  }
  
  public int getTimeZone() {
    return (timeZone);
  }

  public void setTimeZone(int timeZone) {
    this.timeZone = timeZone;
  }
}
