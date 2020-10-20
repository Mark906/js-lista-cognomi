var cognomi = [];
var n;
var cognome;
var presenza = 0;
var posizione = 0;


  do{
    n = parseInt(prompt('Inserisci il numero di cognomi da inserire: '));
  } while(isNaN(n))

  for (var i=0; i<n; i++){
    cognomi[i] = prompt('Inserisci il cognome numero '+(i+1)+': ');
    cognomi[i] = cognomi[i].charAt(0).toUpperCase() + cognomi[i].slice(1);
  }

  console.log(cognomi);
  cognomi.sort();

  for (var i=0; i<n; i++) {
    console.log(cognomi[i]);
  }

  do{
    cognome = prompt('Inserisci il tuo cognome: ');
  } while(!isNaN(cognome))
    cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);

  for (var i = 0; i < n; i++) {
    if(cognome == cognomi[i]){
      presenza = 1;
      posizione = i;
    }
  }

  if(presenza == 1){
    console.log('il tuo cognome è già presente nella posizione: '+(posizione+1));
  } else {
    cognomi.push(cognome);

    cognomi.sort();

    console.log(cognomi);

    posizione = 0;
    for (var i = 0; i < n; i++) {
      if (cognome == cognomi[i]) {
        posizione = i;
      }
    }

    console.log('il tuo cognome è stato inserito nella posizione: '+(posizione+1));
  }
