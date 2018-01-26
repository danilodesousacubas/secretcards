export class Config{

    private _context;
    private _perfil = 'qas';
    
    constructor() {
        if(this._perfil === 'local'){
            console.log("local");
            this._context = 'http://localhost:8080';
        } else if(this._perfil === 'production'){
            console.log("prod");
            this._context = 'https://secretcards.herokuapp.com';
        } else if(this._perfil === 'qas'){
            console.log("qas");
            this._context = 'https://qas-secretcards.herokuapp.com';
        }
    }

    getContext() {
        return this._context;
    }
}