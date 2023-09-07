let input = document.querySelector("input");
let p = document.querySelector("p");

const contacts = [
  { name: "Bruno", cellphone: 62985449141 },
  { name: "Thais", cellphone: 62999999999 },
  { name: "Gustavo", cellphone: 62999999999 },
  { name: "Fernando", cellphone: 62999999999 },
  { name: "Felipe", cellphone: 62999999999 },
  { name: "Rosa", cellphone: 62999999999 },
  { name: "Bianca", cellphone: 62999999999 },
  { name: "Sarai", cellphone: 62999999999 },
];

function findContact() {
  for (let i = 0; i < contacts.length; i++) {
    if (input.value === contacts[i].name) {
      p.innerHTML = `Contato de ${contacts[i].name} encontrado, o seu telefone é ${contacts[i].cellphone}`;
      break;
    } else {
      p.innerHTML = `Contato não encontrado`;
    }
  }
}