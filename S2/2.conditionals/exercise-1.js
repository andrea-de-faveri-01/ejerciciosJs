const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const isApproved = "is Approved";
const isNotApproved = "is Not Approved"

for (let i = 0; i < alumns.length; i++) {
  const alumn = alumns[i];
  {
    if (alumns[i].T1 === true && alumns[i].T2) {
    alumns[i].alumn = isApproved;
    }
    else if (alumns[i].T1 === true && alumns[i].T3) {
      alumns[i].alumn = isApproved;
    }
    else if (alumns[i].T2 === true && alumns[i].T3) {
      alumns[i].alumn = isApproved;
    }
      else (alumns[i].alumn = isNotApproved)
  }
}
console.log(alumns);
