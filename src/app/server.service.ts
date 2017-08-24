
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  private fireUrl = 'https://wdrebuild.firebaseio.com/';
  private userSessions = 'userSessions.json';
  private references = 'ref.json';

  constructor(private http: Http) {

  }

  storeUserSessions(sessions: any[]) {
    return this.http.post(this.fireUrl + this.userSessions, sessions);

  }

  getReferences() {
    return this.http.get(this.fireUrl + this.references);
  }

}
