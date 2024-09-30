import { Component, LOCALE_ID } from '@angular/core';
import { Product } from '../../models/Product';
import { Promo } from '../../models/Promo';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ProductComponent } from "../product/product.component";


registerLocaleData(localeFr);

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }]
})

export class CatalogComponent {
  selectedProducts: Product[] = []; // tableau qui contiendra les produits achetés

  products: Product[] = [
    
    new Product(
        "Apple iPhone 15 Pro", 
        999, 
        "Découvrez l'iPhone 15 Pro, alliant puissance et élégance avec un design en titane, un processeur A17 Pro et un appareil photo ultra-performant.",
        new URL('https://fr.shopping.rakuten.com/photo/4610654149.jpg'),
        new Promo(810, new Date(), new Date('2024-10-10'))
    ),
    
    
    
    new Product(
        "Sony WH-1000XM5", 
        349, 
        "Le casque Sony WH-1000XM5 offre une qualité audio de premier ordre avec réduction de bruit active.",
        new URL('https://fr.shopping.rakuten.com/photo/21064317786.jpg'),
        new Promo(249, new Date(), new Date('2024-11-01'))
    ),

    new Product(
      "Airpods Max Orange", 
      579, 
      "Les AirPods Max sont des écouteurs sans fil haut de gamme d'Apple.",
      new URL('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-orange_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724927052299'),
      new Promo(450, new Date(), new Date('2024-12-01'))
    ),
    
    
    new Product(
        "MacBook Air M2", 
        1299, 
        "Le MacBook Air M2 offre une puissance impressionnante dans un format ultra-fin.",
        new URL('https://static.fnac-static.com/multimedia/Images/FR/MDM/5f/50/13/18042975/3756-1/tsp20240916135736/Apple-MacBook-Air-13-256-Go-D-8-Go-RAM-Puce-M2-CPU-8-coeurs-GPU-8-coeurs-Lumiere-Stellaire-2022.jpg'),
        null
    ),

    new Product(
      "Samsung Galaxy S23", 
      899, 
      "Le Galaxy S23 offre une expérience premium avec des performances incroyables et un design élégant.",
      new URL('https://www.cdiscount.com/pdt2/9/8/1/1/700x700/sam8806094724981/rw/samsung-galaxy-s23-128go-lavande.jpg'),
      null
  ),
    
];

  /* méthode qui vérifie si il reste des produits en promo */

  collectionHasActivePromo(): boolean {
    const productsWithPromo =  this.products.filter((product => product.getPromo() !== null));
    return productsWithPromo.length > 0; // il y'a au moins 1 produit encore en promo
  }

  buyProduct(productToBuy: Product): void {
    this.selectedProducts.push(productToBuy);
    this.products = this.products.filter(product => product.getId() !== productToBuy.getId());
  }

}