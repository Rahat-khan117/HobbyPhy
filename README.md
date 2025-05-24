Layout Structure
Navbar:
Logo/Name
Home
All Groups
Create Group (Private)
My Groups (Private)
Login/Register (Conditional)
If logged in:
Show user photoURL
On hover: show displayName
Logout button
Main Section:
The Main Section will show different pages based on routes.




Footer:
A Footer with all relevant information and eye-catching design.




Home Page:
Banner/Slider with 3+ meaningful slides
Featured Groups section (limit to 6 ongoing groups)
Add 2 extra static sections




Authentication
 Login Page: When you click the login button on the navbar it redirects to the login page. You have to use a password and email-based authentication to log in. The login page will have-  
Email 
Password 
Google login, GitHub - implement any of one 
A link that will redirect to the Register page
   If the user logs in successfully, then 
navigate them to their desired Route / Home page.
If not, show him an error with a toast/error message anywhere in the form.

Register Page: You have to use a password and email-based authentication to register. The Register page will have the following - 
Name 
Email 
photoURL 
password  
A Link that will redirect to the login page 
  

After successful login or Register you need to show toast/sweet alert 
 

Create Group Page ( /createGroup )
Create Group Page that can be part of HobbyHub. The form will allow users to create a new hobby group. The form will have:
Group Name
Hobby Category (dropdown)
Hobby Category for example:
Drawing & Painting
Photography
Video Gaming
Fishing
Running
Cooking
Reading
Writing (etc)
Description
Meeting Location
Max Members
Start Date (deadline equivalent)
Image URL
User Name (readonly)
User Email (readonly)
"Create" Button
This page will be a private/protected route.
Once you fill in the form and click the "Create" button, the data will be saved to the database, and a success message will be displayed using a toast or sweet alert.



Group Details Page ( /group/:id )
Show all info from DB
"Join Group" button
This page will be a private/protected route.



All Groups Page ( /groups )
Show all groups in table or card format
Each group: "See More" button → goes to Details Page
My Groups Page ( /myGroups )
Only shows groups created by the logged-in user
Show in table format
Each row:
Info + "Update" and "Delete" buttons
	This page will be a private/protected route.
When the user clicks the "Delete" button, the group will be removed from the database after confirmation.

Update Group Page ( /updateGroup/:id )
Same fields as Create Group
Name & Email readonly
Update button → show success toast and update DB
This page will be a private/protected route.
You can use a modal to update group details instead of navigating to a separate page. This is optional and provides a smoother user experience.




also added...
404 Not Found Page
