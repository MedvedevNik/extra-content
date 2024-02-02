# Привет! Это сайт с дополнительными материалами

Здесь мы будем публиковать статьи, которые помогут студентам лучше усвоить курсы по веб-разработке в подростковом направлении Практикума.

Проект открыт для наставников и код-ревьюэров. Мы будем рады, если вы принесёте статью, поможете с разработкой сайта, или просто предложите идею, куда двигаться дальше.

Сейчас сайт деплоим сюда (скоро будет красивый домен):

https://graceful-mochi-984f47.netlify.app/

## Стек и запуск

Проект на Nuxt.js. Для генерации статики из маркдауна используется Nuxt Content.

Дока:

- https://nuxt.com/
- https://content.nuxt.com/
- https://vuejs.org/

Запустить проект:

```bash
npm i && npm run dev
```

## Как контрибьютить в контент?

В репозитории есть папка `/content`, в ней подпапки:

- `/general` — для статей на общую тематику, чвязанную с технологиями
- `/html` — для статей про HTML
- `/css` — для статей про CSS
- `/js` — для статей про JavaScript
- `/react` — для статей про React и экосистему
- `/node` — для статей про Node.js и Express
- `/tools` — для статей про вспомогательные тулы (ПО, серверные технологии и пр.)

Вы можете создать в любой из этих папок `.md`-файл со статьёй. И написать Её языком разметки маркдаун.

Обязательно укажите `title` в верху вашей статьи. Типовая статья выглядит так.

```md
---
title: Название, которое появится в виде ссылки на главной странице
---

# Заголовок

остальной маркдаун

```

Кроме того, интерпретатор маркдауна позволяет вставить в него любой HTML-тег, он отобразится на странице.Но мы просим вас делать так только в исключительных случаях.

Вместо этого мы создаём кастомные компоненты.

## Кастомные компоненты

В папке `/components/content` лежат компоненты, которые могут быть использованы в маркдаун-файлах. Мы их называем, снабжая заглавной буквой `C` в начале.

Например, компонент изображения содержит возможность добавить кэпшен-описание. Вот как это выглядит в markdown-файле:

```md
::CImage
---
src: /images/general/absolute-and-relative-path/3.png
alt: Консоль показывает, что по обозначенному в HTML-коде пути нет картинки с именем image.png
---
Консоль показывает, что по обозначенному в HTML-коде пути нет картинки с именем image.png
::
```

а так он выглядит во Vue-файле

```ts
<template>
  <figure>
    <img :src="src" :alt="alt" />
    <figcaption class="caption"><slot /></figcaption>
  </figure>
</template>

<script setup lang="ts">
  const props = defineProps<{
    src: String,
    alt?: String,
  }>()
</script>

```

Правила:

`::ИмяКомпонента` — открывающий тег компонента

так выглядит зона настройки компонента пропсами
```
---
prop1: propvalue
prop2: propvalue
---
```

а после пропсов перед закрывающим тегом можно писать содержимое, которое отобразиться в слоте компонента

`::` — закрывающий тег компонента


## Что приносить?

Принесите issue, если думаете, что какой-то контент нужен, но не готовы его писать. Объясните в issue, какую проблему студента это решит.

Принесите PR со статьёй, если готовы. Она может быть любого качества, мы постараемся помочь довести её до классного вида. Часто наставники пишут такой длинный ответ студенту в чате, что это уже половина статьи.

Если видите ошибку в сайте или знаете, как улучшить что-то — issue или PR.

Если есть идея — issue

Адресат или ревьюэр во всех случаях @pa7lux, он разберётся, кому передать.

## Что будет дальше, если я принесу контент или правку?

Мы позовём кого-то из контент команды на помощь вам. Это может быть другой автор, редактор, методист или дизайнер. Они помогут доделать пост. Следите за вашими issue или PR, будут комментарии.