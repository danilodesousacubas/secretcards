export class Config{

    private _context;
    private _perfil = 'local';

    constructor(){
        if(this._perfil === 'local'){
            this._context = 'http://localhost:8080';
        }
        
    }

    getContext(){
        return this._context;
    }


}