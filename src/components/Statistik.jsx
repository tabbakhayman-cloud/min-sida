const antal = projektLista.reduce((summa, projekt) => {
  for (const teknik of projekt.teknik) {
    summa[teknik] = (summa[teknik] || 0) + 1;
  }
  return summa;
}, {});

// { React: 3, CSS: 2, Git: 1 }