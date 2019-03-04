## Weather forecast React App

[![Build Status](https://travis-ci.com/haritonasty/forecast.svg?token=B58U9iPoxqXxExhvJm4a&branch=develop)](https://travis-ci.com/haritonasty/forecast)
[![Coverage Status](https://coveralls.io/repos/github/haritonasty/forecast/badge.svg?branch=configure-future-badges&t=VzvIPZ)](https://coveralls.io/github/haritonasty/forecast?branch=develop)
### Запуск:
```
npm install
npm run start
```
Приложение запустится на [http://localhost:3000](http://localhost:3000)

![](./assets/screenshot.png)


### Функциональность
- Приложение отображает температуру, относительную влажность воздуха, скорость ветра и количество осадков для выбранного города на конкретную дату.
- Используется поиск городов (Google Places API) -> город добавится в список избранных ниже.
- Можно выбрать дату только из предыдущих 30 дней ([Weatherbit API](https://www.weatherbit.io/) free plan)

### Технические детали

- Приложение построено на основе шаблона [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- `styled components`
- `redux-saga`
- `reselect`
- `immutableJS`
- `npm run generate` для генерации компонентов
- Предустановленный список городов беру из json-файла через серверную прослойку


### Добавленные пакеты: 
1. `react-datepicker` - удобно кастомизируемый, гибкий, использует date-fns
2. `react-places-autocomplete` - для поиска городов (прослойка для google places API) 



###  🤔 Трудности:
1. Не разобралась, как записать в redux store (через Immutable) не Map/List, а примитивный тип. Чтобы избежать конструкций вида `date: { date: '' }`. Видимо не предусматривается, что подхранилище - примитивный тип?
3. Не удалось полностью исключить верстку в `containers/`  для оберток в основном.
4. Получились на мой взгляд очень раздутые саги, не придумала, как это можно улучшить.
5. Не получилось изящно хранить список городов (на мой взгляд). То есть, считаю тот вид, к которому я пришла удобным для масштабирумоемости: если надо где-то еще отрендерить список городов без groupBy по странам, то решение удобное. Либо есть более изящный GroupBy (:
6. Хотела писать на TS, но большое количество новых библиотек меня переубедили. Времени уходило на маленькие действия много, решила писать без TS для скорости.

