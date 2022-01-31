import Cookie, { CookieSetOptions } from 'universal-cookie';

class CookieService {
  cookie: Cookie;

  constructor() {
    this.cookie = new Cookie();
  }

  get(key: string) : string {
    return this.cookie.get(key) as string;
  }

  set(key: string, value :string, date : Date) : void {
    this.cookie.set(key, value, { path: '/', expires: date });
  }

  getToken() : string {
    return this.get('access_token');
  }

  getUserId() : string {
    return this.get('userId');
  }

  setUserId(userId : string, options : CookieSetOptions) {
    this.cookie.set('userId', userId, options);
  }

  setToken(token : string, options : CookieSetOptions) {
    this.cookie.set('access_token', token, options);
  }

  login(userId : string, token: string) : void {
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    const options : CookieSetOptions = { path: '/', expires: date };
    this.setUserId(userId, options);
    this.setToken(token, options);
  }

  isLogin() : boolean {
    return this.getUserId() !== undefined && this.getToken() !== undefined;
  }
}

export default new CookieService();
