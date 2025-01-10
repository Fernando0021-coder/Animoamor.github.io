const messages = [
    "Eres increíble.",
    "Vales muchísimo.",
    "Eres una buena hija y tu madre te ama.",
    "Eres un excelente hermana.",
    "Sé que estás teniendo un mal comienzo, pero yo sé que puedes.",
    "Nunca olvides lo especial que eres.",
    "Siempre recuerda que aquí tienes a alguien que está perdidamente enamorado de ti.",
    "Tienes la sonrisa más hermosa que haya visto.",
    "Estoy muy orgulloso por todo lo que superas día tras día.",
    "Tienes la carita más preciosa del mundo.",
    "Algún día te prometo que no dejaré que derrames ni una lágrima más."
];

const container = document.getElementById("message-container");

// Función para cambiar el mensaje
function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  container.textContent = messages[randomIndex];
}

// Mostrar un mensaje aleatorio al hacer clic
container.addEventListener("click", showRandomMessage);
