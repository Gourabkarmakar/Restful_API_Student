# Restful_API_Student
Student Rest API 
clone This Repository and run npm install last run npm run dev For Start The Project

Test This Project using Postman Not Paid Promotions Usually I Use This 

In This Api Use: 

    1. Create Entry Student
        --> POST Request is Use For Creation
            -> send Data using -> http://localhost:3000/students & 
               send data using body In Json Format To Key And Value
        
    2. Read Student
        --> GET Is use for Read Student & We can Multiple Data Read In one Time
                -> using id and name Read data Example
                    * By No Filter   -> http://localhost:3000/students
                    * By id Filter   -> http://localhost:3000/students/id="Send id"
                    * By Name Filter -> http://localhost:3000/students/studentname="Send Name"
                    
    3. Update Student
        --> PUT is use for Update
                -> using id we Update
                    * Example -> http://localhost:3000/students/id=" set id " 
                      & in Body Set what You want to change with Json Format and Key with Value
                  
    4. Delete Student
        --> DELETE is use for delete
                --> using id Delete
                    * Example -> http://localhost:3000/students/id=" set id " for Delete The Student
    
  # Author: Gourab Karmakar
