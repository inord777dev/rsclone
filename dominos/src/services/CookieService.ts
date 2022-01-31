import Cookie from 'universal-cookie';

const cookie = new Cookie();

export default class CookieService {
  static getToken() : string {
    return cookie.get('access_token') as string;
  }

  static setToken(token: string) : void {
    const date = new Date();
    date.setTime(date.getTime() + 20 * 60 * 60 * 1000);
    console.log(CookieService.getToken());
    cookie.set('access_token', token, { path: '/' });
    console.log(CookieService.getToken());
  }
}
