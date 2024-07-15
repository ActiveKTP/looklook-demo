export class AuthModel {
  success: boolean;
  token: string;
  refreshToken: string;
  // expiresIn: Date;

  setAuth(auth: AuthModel) {
    this.success = auth.success;
    this.token = auth.token;
    this.refreshToken = auth.refreshToken;
    // this.expiresIn = auth.expiresIn;
  }
}
