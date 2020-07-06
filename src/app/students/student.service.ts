import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { StudentModel } from '../model/student.model';
import { Observable } from 'rxjs';
import { RestResponse } from './../model/RestResponse.model';



@Injectable()
export class StudentService {

  id:number;
  constructor(private http:HttpClient) { }

  public getStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>("http://localhost:8080/api/GetStudents")
    };
    public deleteStudent(id):Observable<RestResponse>{
      console.log(id);
      return this.http.delete<RestResponse>(`http://localhost:8080/api/deleteStudent/${id}`);
      
     }
     
     public getStudent(id){
       return this.http.get<StudentModel>(`http://localhost:8080/api/getStudentById/${id}`);
     
     }
     public updateStudent(student:StudentModel):Observable<RestResponse>{
      return this.http.post<RestResponse>("http://localhost:8080/api/updateStudent",JSON.stringify(student));
     }
     public createStudent(student:StudentModel):Observable<RestResponse>{
      return this.http.post<RestResponse>("http://localhost:8080/api/createStudent",JSON.stringify(student));
     }
     
     
}
