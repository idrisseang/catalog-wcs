/* Classe qui a la responsabilité de gérer les promos */

export class Promo {
    private discountPrice: number;
    private startDate: Date;
    private endDate: Date;

    constructor(discountPrice: number, startDate: Date, endDate: Date){
        this.discountPrice = discountPrice;
        // par défaut quand une promo est créée on lui assigne la date du jour
        this.startDate = new Date(Date.now());
        this.endDate = endDate;
    }

    /* Méthodes */

    //retourner le prix réduit d'un produit
    public getDiscountPrice(): number {
        return this.discountPrice;
    }

    /*retourner le pourcentage de réduction 
    entre le prix initial et le prix réduit
    La réponse s'obtient en faisant (1 - (prix réduit / prix initial))*100 */

    public getDiscountPercentage(initialPrice: number): number {
        return Math.ceil( 100 * ( 1 - (this.discountPrice / initialPrice) ) );
    }

    public getPercentageIsAbove20(initialPrice: number): boolean {
        return this.getDiscountPercentage(initialPrice) > 20;
    }
    
    /* retourner le nombre de jours restants pour la promo 
    Le calcul s'effectue entre la date de la fin de la promo et la date actuelle

    Date.getTime() => permet de retourner un timestamp =>
    valeur en millisecondes du temps écoulé depuis le 1 Janvier 1970 à 00h
    */

    public getDaysLeft(): number {
        const today = new Date();
        const delayInMs = this.endDate.getTime() - today.getTime();
        const daysLeft = Math.floor(delayInMs / (1000*60*60*24));
        return daysLeft; 
    }
}