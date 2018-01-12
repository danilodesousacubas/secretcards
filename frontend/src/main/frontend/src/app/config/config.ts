export class Config{

    private _context;
    private _perfil = 'local';
    
    constructor() {
        
        console.log("=============================");
        console.log("=============================" + this._perfil);
        
        
        if(this._perfil === 'local'){
            
            console.log("SET LOCAL");
            this._context = 'http://localhost:8080';
        }

        if(this._perfil === 'production'){
            console.log("SET PRODUCTION");
            this._context = 'https://secretcards.herokuapp.com';
        }
    }

    getContext() {
        return this._context;
    }
}
