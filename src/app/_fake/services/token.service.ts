import { AuthModel } from 'src/app/modules/auth/models/auth.model';
import { environment } from 'src/environments/environment';

export class Token {
  private authSessionStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  public requestAuthToken(): string | undefined {
    try {
      const lsValue = sessionStorage.getItem(this.authSessionStorageToken);
      if (!lsValue) {
        return undefined;
      }
      const authData: AuthModel = JSON.parse(lsValue);
      return authData.token;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
