const cards = document.querySelectorAll(".card-dica");
const modal = document.querySelector(".dica-modal");
const closeBtn = document.querySelector(".dica-modal__close");

const modalNome = document.querySelector(".dica-modal__nome");
const modalCurso = document.querySelector(".dica-modal__curso");
const modalPreview = document.querySelector(".dica-modal__preview");
const modalTexto = document.querySelector(".dica-modal__texto");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const nome = card.querySelector("h3")?.textContent.trim() || "";
        const curso = card.querySelector(".curso")?.textContent.trim() || "";
        const preview = card.querySelector(".preview")?.innerHTML || "";
        const conteudo = card.querySelector(".conteudo")?.innerHTML || "";

        modalNome.textContent = nome;
        modalCurso.textContent = curso;
        modalPreview.innerHTML = preview;
        modalTexto.innerHTML = conteudo;

        modal.classList.add("is-open");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
});

modal.querySelector(".dica-modal__backdrop").addEventListener("click", () => {
    modal.classList.remove("is-open");
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("is-open");
    }
});

const copyables = document.querySelectorAll(".copyable");

copyables.forEach(item => {

    item.addEventListener("click", async () => {

        const texto = item.dataset.copy;

        await navigator.clipboard.writeText(texto);

        const original = item.innerHTML;

        item.innerHTML = "Copiado!";

        setTimeout(() => {

            item.innerHTML = original;

        }, 1500);

    });

});