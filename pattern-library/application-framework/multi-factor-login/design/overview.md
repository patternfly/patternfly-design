# Multi-Factor Login

The multi-factor login allows a user to gain access to an application by entering their authentication information step by step, such as username and password. For additional login methods, see:
- [Login Page](https://www.patternfly.org/pattern-library/application-framework/login-page/#)
- [Single Sign-On](https://www.patternfly.org/pattern-library/application-framework/single-sign-on/#)

## Identity First
When identity first, a user will input the username and password separately and may not be required a password when other authentication mechanisms are used (for example fingerprint, two-way ssl, etc.). Also, it allows automatically redirecting to an external IdP when the user is linked to an external IdP.

![Image of identity first 1](img/identity-first-1.png)
![Image of identity first 2](img/identity-first-2.png)

## Other Flows
In addition to the basic login flows, there are some other steps can be added to the login process.

### Authenticator Login
![Image of authenticator](img/Authenticator.png)
### SMS Login
![Image of sms](img/SMS.png)
### Backup Code Login
![Image of backup code](img/Backup-Code.png)
