import { cats } from "./cats.js"

const catContainer = document.getElementById("cats")

cats.forEach(function (item) {
    let favourite = item.favourite ? " ★" : "";
    let ageWord = "лет"

    if (item.age === 1) {
        ageWord = "год"
    } else if (item.age >= 2 && item.age <= 4) {
        ageWord = "года"
    }

    const card = document.createElement("div")
    card.className = "cat-card"

    const elements = [
        createElement("h2", item.name + favourite),
        createElement("p", `Возраст: ${item.age} ${ageWord}`),
        createElement("p", `Рейтинг: ${item.rate}/10`),
        createElement("p", item.description),
        createElementWithAttributes("img", {
            src: item.img_link,
            alt: `Фотография кота ${item.name}`,
            className: "cat-image"
        })
    ]

    elements.forEach(element => {
        card.appendChild(element)
    })

    catContainer.appendChild(card)
})

function createElement(tag, textContent = "") {
    const element = document.createElement(tag)
    if (textContent) {
        element.textContent = textContent
    }
    return element
}

function createElementWithAttributes(tag, attributes = {}) {
    const element = document.createElement(tag)
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value)
    }
    return element
}