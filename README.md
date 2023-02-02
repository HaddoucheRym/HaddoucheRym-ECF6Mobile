# HaddoucheRym-ECF6Mobile
## Description
Localib est une application de gestion de locations de véhicules et de locataires.

## A propos
Vous trouverez dans ce dépôt 2 dossiers à la racine:
- le dossier backLocalib qui contient la partie back-end: Spring boot
- le dossier mobileLocalib qui contient la partie mobile : ionic6 react

## Prerequis
### Pour le mobile
- IDE ([VSCode](https://code.visualstudio.com/) , [AndroidStudio](https://developer.android.com/studio))
- NodeJs
### Pour le back
- Java 11+
-  [docker](https://www.docker.com/products/docker-desktop)
- [docker-compose](https://docs.docker.com/compose/install/)
- Un IDE Java ([Eclipse](https://www.eclipse.org/downloads/), [IntelliJ](https://www.jetbrains.com/fr-fr/idea/))

## Instalation

- Clonez le projet

### Pour le back

- cd backLocalib et ouvrez le projet dans un IDE java 

#### Base de données

pour lancer la base de données, il faut se placer dans le dossier docker et lancer la commande suivante:
- ` docker-compose up -d `

#### Lancement de l'application sans IDE

Pour lancer l'application, il faut se placer dans le dossier racine et lancer la commande suivante:
- ` ./gradlew spring-boot:run` 

#### Lancement de l'application avec IntelliJ

pour lancer l'application avec un IDE, lancer la class LocalibSpringBootApplication

### Pour le mobile
- cd mobileLocalib
- Ouvrez un terminal dans Visual Studio Code
- Exécutez la commande ` npm install` 
- Exécutez la commande ` npm run start` 