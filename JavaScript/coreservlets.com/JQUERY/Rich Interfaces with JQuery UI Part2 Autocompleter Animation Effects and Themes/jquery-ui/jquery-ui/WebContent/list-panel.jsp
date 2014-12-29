<% double range = 10.0;
   try { 
     String r = request.getParameter("range");
     range = Integer.parseInt(r);
   } catch(Exception e) {}
%>
<h3>Numbers from 0.0 to <%= range %></h3>
<ul>
  <li><%= Math.random() * range %></li>
  <li><%= Math.random() * range %></li>
  <li><%= Math.random() * range %></li>
  <li><%= Math.random() * range %></li>
  <li><%= Math.random() * range %></li>
</ul>
