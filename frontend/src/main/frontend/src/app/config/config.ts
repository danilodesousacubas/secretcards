export class Config{

    private _context;

    private _perfil = 'qas';
    
    constructor() {
        if(this._perfil === 'production'){
            this._context = 'http://localhost:8080';
        
        } else if(this._perfil === 'dev'){
            this._context = 'https://dev-secretcards.herokuapp.com';

        } else if(this._perfil === 'qas'){
            this._context = 'https://qas-secretcards.herokuapp.com';
        
        } else if(this._perfil === 'production'){
            this._context = 'https://secretcards.herokuapp.com';
        }

        console.log("FRONT CONTEXT", this._context);
    }

    getContext() {
        return this._context;
    }
}
