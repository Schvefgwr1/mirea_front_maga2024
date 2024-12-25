import {NewsElementProps} from "./NewsElementProps.ts";
import News1 from "../News/Photos/news1.png";
import News2 from "../News/Photos/news2.png";
import News3 from "../News/Photos/news3.png";

export const newsData: NewsElementProps[] = [
    {
        name: "Apple презентовала новую линейку MacBook",
        description: "Мощные чипы, яркие дисплеи и улучшенная автономность ноутбуков.",
        authorName: "Kristin",
        countComments: 453,
        date: new Date(2013, 11, 19),
        photo: News1
    },
    {
        name: "Искусственный интеллект в медицине: будущее уже здесь",
        description: "Нейросети помогают врачам диагностировать болезни быстрее и точнее.",
        authorName: "Robert",
        countComments: 738,
        date: new Date(2015, 11, 28),
        photo: News2
    },
    {
        name: "Смартфоны 2024: какие модели задают тренды?",
        description: "Новые функции, улучшенные камеры и продвинутая производительность устройств.",
        authorName: "Arlene",
        countComments: 826,
        date: new Date(2024, 5, 9),
        photo: News3
    },
    {
        name: "Искусственный интеллект в медицине: будущее уже здесь",
        description: "Нейросети помогают врачам диагностировать болезни быстрее и точнее.",
        authorName: "Robert",
        countComments: 738,
        date: new Date(2015, 11, 28),
        photo: News2
    },
    {
        name: "Смартфоны 2024: какие модели задают тренды?",
        description: "Новые функции, улучшенные камеры и продвинутая производительность устройств.",
        authorName: "Arlene",
        countComments: 826,
        date: new Date(2024, 5, 9),
        photo: News3
    },
]