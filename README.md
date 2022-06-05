# Student-Info-Management
This is a Management System for Students Detail

POST
http://localhost:8000/api/v1/student/
{
"studentName": "Superman",
"studentAge": "36",
"gender": "Male",
"city": "Metropolis",
"course": "Law and Order",
"duration": "10 years",
"collegeName": "ABC Law and Order College",
"emailId": "SupermanMetropolis@gmail.com"
}

POST
http://localhost:8000/api/v1/user/signup
{
"name": "Akilan",
"email": "Akilan98@Selvam.IO",
"password": "pass1234",
"passwordConfirm": "pass1234",
"roles":"user"
}

POST
http://localhost:8000/api/v1/user/login
{
"email": "Akilan2002@Selvam.IO",
"password": "pass1234"
}

PATCH
http://localhost:8000/api/v1/user/updatePassword/
{
"passwordCurrent":"pass12345",
"password": "pass1234",
"passwordConfirm": "pass1234"
}
