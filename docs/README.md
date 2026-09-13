# Tomaso Valdinoci — sito tributo

Sito statico (solo HTML/CSS/JS vanilla, nessuna build) dedicato a Tomaso Valdinoci,
violista dell'Orchestra e del Quartetto del Teatro alla Scala di Milano.
Contenuti e fotografie estratti dall'archivio Facebook della pagina
"Tomaso Valdinoci musicista", dalla sua biografia scritta dalla famiglia e da
fotografie e documenti d'archivio aggiunti successivamente.

Pubblicato su GitHub Pages (cartella `/docs` sul branch `main`) con dominio
personalizzato **tomasovaldinoci.it** (vedi `CNAME`).

## Struttura

```
docs/
├── index.html          Home: ritratto e titolo
├── biografia.html       Biografia completa, in prima persona
├── galleria.html        Galleria fotografica, divisa per album
├── css/style.css         Foglio di stile unico
├── js/main.js             Menu mobile + lightbox foto
├── CNAME                   Dominio personalizzato per GitHub Pages
└── assets/
    ├── favicon.svg
    ├── home.png          Foto usata in home (Quartetto + T. Valdinoci alla viola)
    └── img/
        ├── quartetto/    Quartetto della Scala
        ├── orchestra/    Orchestra della Scala
        ├── dediche/      Fotografie dedicate dai grandi maestri
        ├── articoli/     Rassegna stampa
        └── profilo/      Documenti (attestati, dichiarazioni)
```

## Anteprima locale

Nessun build step: basta servire la cartella con un server statico qualsiasi, es.

```bash
cd docs
python3 -m http.server 8000
# poi apri http://localhost:8000/index.html
```

## Note sui contenuti

- Testi, date e didascalie sono stati estratti dai file JSON degli album
  Facebook e, quando assente una descrizione, dedotti dalle immagini stesse
  (es. il numero del "Golfo Mistico" del 25 giugno 1953) o forniti
  direttamente dalla famiglia per i documenti aggiunti in seguito.
- Il testo di `biografia.html` è tratto integralmente da "Biografia Tomaso
  Valdinoci.odt" (fornito dalla famiglia), suddiviso in capitoli per la lettura
  ma senza modifiche al contenuto originale.
- L'11 maggio 1946 la Scala riapre diretta da Toscanini; l'Attestato di
  Benemerenza per il contributo alla ricostruzione è stato conferito a
  Valdinoci vent'anni dopo, l'11 maggio 1966 — le due date non vanno confuse.

## Privacy

Le cartelle `facebook-tomasovaldinocimusicista-*` nella root del repository
sono l'esportazione grezza dei dati di Facebook ("Le tue informazioni") e
contengono metadati personali (indirizzi IP di upload, ecc.) che **non devono
essere pubblicati**. Solo il contenuto di `docs/` è pensato per la
pubblicazione online (il `.gitignore` in root esclude già quelle cartelle,
oltre a `docs/IMG/` e ai file sorgente `.odt`/scansioni non integrate,
ormai incorporati nel sito).
