import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})

};

const httpOptions2 = {
	headers: new HttpHeaders({
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json',
		'x-api-key': '2HxEcVeegd7YN72NJR9aU2tmRtq9rBNn5wXgNnTl'
	}),
	// responseType: 'text' as 'json'
};

const httpOptions1 = {
	headers: new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		'Accept': 'application/json',
		'x-api-key': '2HxEcVeegd7YN72NJR9aU2tmRtq9rBNn5wXgNnTl'
	}),
	'withCredentials': true //
}

@Injectable({
	providedIn: 'root'
})
export class TransactionViewService {

	constructor(private httpClient: HttpClient) { }

	baseUrl: string = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020"

	showTransactionHistory(custID: number): Observable<any> {
		console.log("service ID" + custID);
		let credentials = {
			"custID": custID
		};
		console.log("service param" + JSON.stringify(credentials));
		return this.httpClient.post<any>(this.baseUrl + "/transaction/view",
			JSON.stringify(credentials),
			httpOptions2).pipe
			(
				catchError(this.handleError)
			);
	}

	private handleError(error: HttpErrorResponse) {
		let errorMessage: string = "";

		if (error.error instanceof ErrorEvent) {
			errorMessage = "An unknown error has occurred: " + error.error.message;
		}
		else {
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}

		console.error(errorMessage);

		return throwError(errorMessage);
	}
}
