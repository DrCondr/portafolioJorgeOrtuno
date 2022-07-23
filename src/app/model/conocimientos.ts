export class Conocimientos {
    id? : number;
    tituloC : string;
    centroC : string;
    anios : number;

    constructor(tituloC:string, centroC:string, anios:number){
        this.tituloC = tituloC;
        this.centroC = centroC;
        this.anios = anios;
    }
}
