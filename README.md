# EStore

- [EStore](#estore)
  - [Про проект](#про-проект)
  - [Технології](#технології)
  - [Інструкція по запуску](#інструкція-по-запуску)
    - [Через Docker (рекомендовано)](#через-docker-рекомендовано)
      - [1. Клонування репозиторію](#1-клонування-репозиторію)
      - [2. Налаштування середовища](#2-налаштування-середовища)
      - [3. Запуск проєкту](#3-запуск-проєкту)
    - [Локально](#локально)
      - [1. Клонування репозиторію](#1-клонування-репозиторію-1)
      - [2. Встановлення залежностей](#2-встановлення-залежностей)
      - [3. Налаштування середовища](#3-налаштування-середовища)
      - [4. Запуск проєкту](#4-запуск-проєкту)
  - [Формат повідомлень комітів](#формат-повідомлень-комітів)
  - [Інструкції та ліцензія](#інструкції-та-ліцензія)
    - [Документація](#документація)
    - [Внесок](#внесок)
    - [Правила поведінки](#правила-поведінки)
    - [Ліцензія](#ліцензія)

## Про проект

**EStore** - це інтернет-магазин товарів з можливістю реєстрації особистого кабінету для перегляду історії замовлень і перебігу доставки. Створено в рамках виконання завдання для дисципліни Проєктний практикум.

## Технології

Проєкт використовує такі технології:

- **Frontend**: [React](https://reactjs.org/), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/), [Redis](https://redis.io/)
- **Контеризація**: [Docker](https://www.docker.com/)

## Інструкція по запуску

### Через Docker (рекомендовано)

#### 1. Клонування репозиторію

```bash
git clone https://github.com/NikitaBerezhnyj/EStore-Project-Practicum.git
```

#### 2. Налаштування середовища

Створіть файл .env у директорії backend і налаштуйте необхідні змінні середовища для підключення до бази даних та інших сервісів за прикладом вказаним у файлі example.env.

#### 3. Запуск проєкту

Для запуску серверу:

```bash
docker-compose up --build
```

Проєкт буде доступний за адресою [http://localhost:5173/](http://localhost:5173/).

### Локально

#### 1. Клонування репозиторію

```bash
git clone https://github.com/NikitaBerezhnyj/EStore-Project-Practicum.git
```

#### 2. Встановлення залежностей

Перейдіть до директорії проєкту та встановіть залежності для backend та frontend:

```bash
# Встановлення залежностей для backend
cd backend
npm install

# Встановлення залежностей для frontend
cd ../frontend
npm install
```

#### 3. Налаштування середовища

Створіть файл .env у директорії backend і налаштуйте необхідні змінні середовища для підключення до бази даних та інших сервісів за прикладом вказаним у файлі example.env.

#### 4. Запуск проєкту

Для запуску серверу:

```bash
# Запуск backend
cd backend
npm run dev

# Запуск frontend
cd ../frontend
npm run dev
```

Проєкт буде доступний за адресою [http://localhost:5173/](http://localhost:5173/).

## Формат повідомлень комітів

Для покращення співпраці в команді і полегшення роботи з історією комітів, ми рекомендуємо використовувати стандарт **Conventional Commits** для повідомлень комітів.

**Формат:**

```bash
git commit -m "<type>: <message>"
```

**Типи комітів:**

- `feat`: для додавання нової функціональності.
- `fix`: для виправлення помилок.
- `chore`: для змін, які не впливають на функціональність (наприклад, оновлення залежностей).
- `docs`: для змін в документації.
- `refactor`: для рефакторингу коду.
- `test`: для додавання або зміни тестів.

**Приклад:**

- `feat: додано можливість фільтрувати товари за категорією`
- `fix: виправлено відображення сторінки профілю`

## Інструкції та ліцензія

### Документація

Основна документація до проєкту знаходиться в теці [docs](./docs).

### Внесок

Якщо ви хочете внести зміни до цього проєкту, будь ласка, ознайомтесь з інструкціями у файлі [CONTRIBUTING.md](CONTRIBUTING.md).

### Правила поведінки

Будь ласка, ознайомтесь із правилами поведінки в файлі [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

### Ліцензія

Цей проєкт ліцензовано під ліцензією MIT License. З текстом ліцензії можна ознайомитись у файлі [LICENSE](LICENSE).
