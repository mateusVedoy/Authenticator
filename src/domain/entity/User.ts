export class User {

    private username: string;
    private email: string;
    private password: string;

    public constructor(username: string, email: string, password: string){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public getUsername() {
        return this.username;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }
}