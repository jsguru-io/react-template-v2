import { LocalContVariable } from './localContVariable';

export class LocalStorage {

  static getAuthToken(): string | null {
    return localStorage.getItem(LocalContVariable.AUTH_TOKEN);
  }
  static setAuthToken(token:string){
    localStorage.setItem(LocalContVariable.AUTH_TOKEN,token);
  }
  static getRefreshToken(): string | null {
    return localStorage.getItem(LocalContVariable.AUTH_TOKEN);
  }
  static setRefreshToken(token:string){
    localStorage.setItem(LocalContVariable.REFRESH_TOKEN,token);
  }

}
