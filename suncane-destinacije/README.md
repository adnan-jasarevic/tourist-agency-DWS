Turistička Agencija - Web Aplikacija

📌 Uvod

Ova aplikacija predstavlja savremenu web platformu turističke agencije. Razvijena je s ciljem da korisnicima omogući pregled ponude turističkih aranžmana, informacija o destinacijama te lak kontakt s agencijom. Aplikacija je razvijena koristeći React, HTML i CSS te pruža intuitivno korisničko iskustvo.

🛠️ Tehnologije korištene u radu


- React.js
- HTML5
- CSS3
- JavaScript
- React Router
- Context (vlastita implementacija)

# Struktura projekta

```
/tourist-agency-DWS-main
└── tourist-agency-DWS-main
├── suncane-destinacije/ # Folder s dodatnim sadržajem ili podacima
├── .gitignore
├── public/
│ └── index.html
├── src/
│ ├── images/ # Slike korištene u aplikaciji
│ ├── components/
│ │ ├── auth/ # Login i Register komponente
│ │ ├── contact/ # ContactForm i ContactPage
│ │ ├── layout/ # Footer, Navbar, BackToTop i ThemeToggle
│ │ └── pages/ # About, Home, PrivateRoute
│ ├── context/
│ │ └── AuthContext.js # Vlastita funkcionalna implementacija contexta
│ ├── styles.css
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
└── README.md
```

# Funkcionalnosti i dizajn
Aplikacija nudi sljedeće funkcionalnosti:

- Prikaz ponuda aranžmana
- Prikaz i detalji destinacija
- Kontakt forma sa validacijom
- Navigacija pomoću React Routera
- Autentifikacija korisnika (Login/Register)
- Korištenje vlastitog Context-a za upravljanje stanjem
- Responsivan dizajn za mobilne uređaje
- Light-Dark theme button
- Back-to-top button

#### Paleta boja

- **Primarna boja:** #0096C7 (Vibrant Blue) – povjerenje i jasnoća
- **Sekundarna boja:** #F4A261 (Warm Sand) – energija i prijateljstvo
- **Tercijarna (akcentna) boja:** #2A9D8F (Tropical Green) – priroda i svježina
- **Dodatne boje:**
  - Tamna (#264653) – stabilnost i profesionalizam, koristi se za navbar i footer
  - Svijetla (#E9F5F9) – koristi se za pozadine kartica
  - Pozadinska (#10ABB7) – svijetlo tirkizna za osnovnu pozadinu tijela stranice

#### Korišteni fontovi

- **Glavni font:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif  
  Koristi se za cijelu web aplikaciju kako bi se osigurala dobra čitljivost i moderan izgled.

- **Nasljedni font:**  
  Većina UI elemenata nasljeđuje osnovni font tijela stranice, što osigurava konzistentnost i jednostavnost u dizajnu.

# Uloge korisnika

- Administrator
- Korisnik – pregled sadržaja i slanje upita putem forme
  /// Doprinos članova tima
- Emir Genjac – frontend + backend funkcionalnosti i povezivanje sa bazom
- Emin Ahbabović – frontend razvoj aplikacije (React, komponente, kontekst, stilizacija)
- Adnan Jašarević – dizajn korisničkog interfejsa (UI dizajn, odabir boja, raspored elemenata, animacije)

# Upute za pokretanje projekta

1. Kloniraj repozitorij:
   
   git clone https://github.com/emirgenjac/tourist-agency-DWS.git
3. Udji u folder:
   
   cd tourist-agency-DWS/suncane-destinacije/
5. Instaliraj pakete:
   
   npm install
7. Pokreni razvojni server
   
   npm start
   
   Aplikacija će biti dostupna na http://localhost:3000
   
- Početna stranica
- O nama
- Kontakt forma
- Login / Registracija
- Mobilni prikaz

# Zaključak

Ova aplikacija demonstrira upotrebu savremenih web tehnologija u razvoju funkcionalne i vizualno privlačne web stranice za turističku agenciju. Projekat je pružio praktično iskustvo u frontend razvoju koristeći React, komponentnu arhitekturu, upravljanje stanjima i responzivan dizajn.

# Slike projekta

![home](src/images/slike-projekat/Picture10)
