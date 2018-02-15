export class Config{

    private _context;
    private _perfil = 'production';
    
    constructor() {
        if(this._perfil === 'local'){
            console.log("local");
            this._context = 'http://localhost:8080';
        
        } else if(this._perfil === 'dev'){
            console.log("dev");
            this._context = 'https://dev-secretcards.herokuapp.com';

        } else if(this._perfil === 'qas'){
            console.log("qas");
            this._context = 'https://qas-secretcards.herokuapp.com';
        
        } else if(this._perfil === 'production'){
            console.log("production");
            this._context = 'https://secretcards.herokuapp.com';
        }
    }

    getContext() {
        return this._context;
    }
}