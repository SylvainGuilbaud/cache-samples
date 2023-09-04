<!-- PRIVATE:Example of a page that is included by 'textinclude.csp'.-->
<!-- Copyright (c) 2001 InterSystems Inc. ALL RIGHTS RESERVED. -->

<!-- This text will be included within the isc:sample tag.
     The textual include is needed because the isc:sample
     tag needs to operate on this text at compile time.
-->
This sample uses the textual include to include a text fragment 
into this CSP page before compiling the CSP page.  The textual
include is the same as the ASP or IIS server side include and
operates the same way.  This allows you to create components and 
then include them as part of your master CSP page. Use the server 
side include when the component must be compiled together with the 
master page.  <br><br>In this example, the innerText of the isc:sample
tag must be compiled with isc:sample tag.
<br><br>Another case that requires the textual include is
a form that uses CSPBIND, since CSPBIND requires the entire
form to be in the same compile.  Therefore, the textual include 
must be used to add tags to a CSP bound form.
