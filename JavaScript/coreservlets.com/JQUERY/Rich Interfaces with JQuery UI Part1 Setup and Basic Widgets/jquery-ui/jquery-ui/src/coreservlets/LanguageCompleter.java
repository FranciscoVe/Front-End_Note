package coreservlets;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import org.json.*;

/** From <a href="http://courses.coreservlets.com/Course-Materials/">the
 *  coreservlets.com tutorials on servlets, JSP, Struts, JSF, Ajax, GWT, and Java</a>.
 */

public class LanguageCompleter extends HttpServlet {
  // 100 most popular programming languages, according to 
  // http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html
  // The first half are in order of popularity, the second half
  // are in alphabetical order.
  private static final String languageString = 
    "Java,C,C++,PHP,C#,Python,Visual Basic,Objective-C,Perl,Ruby,JavaScript,Delphi," +
    "Lisp,SQL,Pascal,Ada,NXT-G,SAS,RPG,Lua,ABAP,Object Pascal,Go,Scheme,Fortran," +
    "Tc,D,COBOL,Logo,CL,APL,JavaFX Script,R,JScript.NET,C shell,ActionScript,Scratch," +
    "IDL,Haskell,Alice,Prolog,Erlang,Smalltalk,Forth,Awk,ML,Scala,ABC,Algol,Applescript," +
    "Bash,bc,Beta,CFML,cg,Clean,Clipper,Cobra,cT,Curl,Dylan,Eiffel,Euphoria,F#,Factor," +
    "Groovy,Icon,Io,J,LabVIEW,LabWindows/CVI,MAD,MAX/MSP,Modula-2,Modula-3,MUMPS,Natural," +
    "Oberon,Objective Caml,Occam,Oz,PL/I,Postscript,PowerShell,Q,REALbasic,S,SIGNAL,SPSS," +
    "Squirrel,Verilog,VHDL,XBase,XSLT,Z shell";
  private static final String[] languageArray = languageString.split(",");
  
  public void doGet(HttpServletRequest request,
                    HttpServletResponse response)
      throws ServletException, IOException {
    String languagePrefix = request.getParameter("term");
    List<String> languages = findLanguages(languagePrefix);
    response.setContentType("application/json");
    PrintWriter out = response.getWriter();
    out.print(new JSONArray(languages));
  }
  
  private List<String> findLanguages(String languagePrefix) {
    languagePrefix = languagePrefix.toUpperCase();
    List<String> languages = new ArrayList<String>();
    for(String language: languageArray) {
      if(language.toUpperCase().startsWith(languagePrefix)) {
        languages.add(language);
      }
    }
    return(languages);
  }
}