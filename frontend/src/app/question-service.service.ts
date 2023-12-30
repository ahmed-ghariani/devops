import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable, map } from "rxjs";
import { Question } from "./question";
import { PageResponce } from "./page-responce";

@Injectable({
  providedIn: "root",
})
export class QuestionServiceService {
  constructor(private http: HttpClient) {}

  public getQuestionsList(
    page: number,
    size: number
  ): Observable<Array<Question>> {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http
      .get<PageResponce>(environment.backendUrl + "questions", { params })
      .pipe(
        map((response) => {
          return response.content;
        })
      );
  }
}
