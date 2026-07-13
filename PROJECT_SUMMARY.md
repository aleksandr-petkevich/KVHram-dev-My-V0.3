# Сводка проекта

## Что было создано

Полноценное админ-приложение для управления расписанием событий с календарем и аутентификацией.

### Backend (NestJS)

**Файлы:**

- `backend/package.json` - зависимости и скрипты
- `backend/tsconfig.json` - конфигурация TypeScript
- `backend/nest-cli.json` - конфигурация NestJS CLI
- `backend/.env.example` - пример переменных окружения
- `backend/.gitignore` - Git ignore правила
- `backend/.dockerignore` - Docker ignore правила
- `backend/Dockerfile` - Docker образ для backend
- `backend/docker-compose.yml` - Docker Compose конфигурация
- `backend/src/main.ts` - точка входа приложения
- `backend/src/app.module.ts` - корневой модуль
- `backend/src/auth/` - модуль аутентификации
  - `auth.module.ts` - модуль аутентификации
  - `auth.service.ts` - сервис для работы с JWT
  - `auth.controller.ts` - контроллер для логина
  - `jwt.strategy.ts` - JWT стратегия
  - `local.strategy.ts` - Local стратегия
  - `jwt-auth.guard.ts` - JWT guard
  - `local-auth.guard.ts` - Local guard
- `backend/src/events/` - модуль событий
  - `events.module.ts` - модуль событий
  - `events.service.ts` - бизнес-логика (CRUD, фильтрация, сортировка, пагинация)
  - `events.controller.ts` - REST API endpoints
  - `schemas/event.schema.ts` - Mongoose схема
  - `dto/create-event.dto.ts` - DTO для создания
  - `dto/update-event.dto.ts` - DTO для обновления

**Функциональность:**

- JWT аутентификация
- CRUD операции для событий
- Фильтрация по status и priority
- Поиск по date и title
- Сортировка по created_at, updated_at, date, status
- Пагинация
- Валидация данных
- Обработка ошибок

### Frontend (Next.js + Ant Design)

**Файлы:**

- `Frontend/package.json` - обновлен с Ant Design
- `Frontend/.env.local.example` - переменные окружения
- `Frontend/Dockerfile` - Docker образ для frontend
- `Frontend/lib/api.ts` - API клиент с TypeScript интерфейсами
- `Frontend/app/login/page.tsx` - страница авторизации
- `Frontend/app/page.tsx` - главная страница с календарем и таблицей

**Функциональность:**

- Форма авторизации (admin/admin)
- Недельный календарь (пн-вс)
- Отображение событий на календаре с цветовым кодированием
- Встроенный iframe с богослужениями (patriarchia.ru)
- Таблица событий с пагинацией
- Фильтры: статус, приоритет, поиск по дате и названию
- Сортировка: по дате создания, дате события, статусу
- Модальное окно для создания/редактирования события
- Выбор цвета для каждого текстового поля
- Адаптивный дизайн

### Docker

**Файлы:**

- `docker-compose.yml` - оркестрация всех сервисов
- `backend/Dockerfile` - multi-stage build для backend
- `Frontend/Dockerfile` - multi-stage build для frontend

**Сервисы:**

- MongoDB 6
- Backend (NestJS) - порт 3001
- Frontend (Next.js) - порт 3000

### Документация

- `README.md` - основная документация
- `SETUP.md` - подробная инструкция по настройке
- `backend/.env.example` - пример конфигурации backend
- `Frontend/.env.local.example` - пример конфигурации frontend

## Как запустить

### Docker (рекомендуется)

```bash
docker-compose up --build
```

### Локально

**Backend:**

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

**Frontend:**

```bash
cd Frontend
npm install
cp .env.local.example .env.local
npm run dev
```

## Доступ

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api
- Логин: admin
- Пароль: admin

## Ключевые особенности

1. **Безопасность**: JWT аутентификация, валидация всех входных данных
2. **Производительность**: Пагинация, фильтрация и сортировка на backend
3. **UX**: Интуитивный интерфейс с Ant Design, цветовое кодирование
4. **Масштабируемость**: Модульная архитектура, Docker контейнеризация
5. **Документация**: Подробные README и SETUP инструкции

## Что дальше

Проект готов к использованию и может быть расширен:

- Добавление пользователей с разными ролями
- Экспорт/импорт событий
- Уведомления
- История изменений
- Дополнительные поля для событий
- Интеграция с другими системами
