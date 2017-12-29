export class Config{

    private _context;
    private _perfil = 'production';
    
    constructor() {
        if(this._perfil === 'local'){
            this._context = 'http://localhost:8080';
        }

        if(this._perfil === 'production'){
            this._context = 'https://secretcards.herokuapp.com';
        }
    }

    getContext() {
        return this._context;
    }
}