# Админ панель - Расписание

Приложение для управления расписанием событий с календарем и аутентификацией.

## Технологии

### Backend

- NestJS + TypeScript
- MongoDB + Mongoose
- JWT аутентификация
- Docker

### Frontend

- Next.js 14 + TypeScript
- Ant Design 5
- dayjs для работы с датами
- Docker

## Быстрый старт с Docker

### Предварительные требования

- Docker и Docker Compose установлены на системе

### Запуск приложения

1. **Клонируйте репозиторий:**

```bash
git clone <repository-url>
cd KVHram-dev-My-V0.3
```

2. **Запустите все сервисы:**

```bash
docker-compose up --build
```

3. **Дождитесь запуска всех сервисов** (примерно 1-2 минуты)

4. **Откройте приложение:**

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

5. **Войдите в систему:**

- Логин: `admin`
- Пароль: `admin`

## Ручной запуск (без Docker)

### Backend

1. **Установите зависимости:**

```bash
cd backend
npm install
```

2. **Создайте файл .env:**

```bash
cp .env.example .env
```

3. **Запустите MongoDB** (должна быть запущена на порту 27017)

4. **Запустите backend:**

```bash
npm run start:dev
```

Backend будет доступен на http://localhost:3001/api

### Frontend

1. **Установите зависимости:**

```bash
cd Frontend
npm install
```

2. **Создайте файл .env.local:**

```bash
cp .env.local.example .env.local
```

3. **Запустите frontend:**

```bash
npm run dev
```

Frontend будет доступен на http://localhost:3000

## Функциональность

### Аутентификация

- Вход по логину и паролю (JWT токены)
- Дефолтные credentials: admin/admin

### Управление событиями

- ✅ Создание события
- ✅ Просмотр событий в таблице
- ✅ Редактирование события
- ✅ Удаление события
- ✅ Фильтрация по статусу и приоритету
- ✅ Поиск по дате и названию
- ✅ Сортировка по дате создания, дате события, статусу
- ✅ Пагинация списка

### Календарь

- Недельный вид (пн-вс)
- Выбор даты для просмотра
- Отображение событий на календаре
- Цветовое кодирование событий
- Встроенный iframe с богослужениями с patriarchia.ru

### Цвета текста

Для каждого текстового поля можно выбрать цвет:

- Черный
- Темно-желтый
- Голубой
- Синий
- Фиолетовый
- Зеленый
- Красный
- Бордовый
- Свой цвет (hex)

## API Endpoints

### Аутентификация

- `POST /api/auth/login` - Вход в систему

### События (требуют авторизации)

- `GET /api/events` - Получить список событий (с фильтрацией, сортировкой, пагинацией)
- `GET /api/events/:id` - Получить событие по ID
- `POST /api/events` - Создать событие
- `PATCH /api/events/:id` - Обновить событие
- `DELETE /api/events/:id` - Удалить событие

#### Параметры для GET /api/events:

- `page` - номер страницы (по умолчанию 1)
- `limit` - количество элементов на странице (по умолчанию 10)
- `status` - фильтр по статусу (new, in_progress, agreed, done)
- `priority` - фильтр по приоритету (low, normal, high)
- `searchDate` - поиск по дате (YYYY-MM-DD)
- `searchTitle` - поиск по названию
- `sortBy` - поле сортировки (created_at, updated_at, date, status)
- `sortOrder` - направление сортировки (asc, desc)

## Структура проекта

```
.
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── auth/           # Модуль аутентификации
│   │   ├── events/         # Модуль событий
│   │   ├── app.module.ts   # Корневой модуль
│   │   └── main.ts         # Точка входа
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── package.json
├── Frontend/               # Next.js frontend
│   ├── app/
│   │   ├── login/          # Страница входа
│   │   └── page.tsx        # Главная страница
│   ├── lib/
│   │   └── api.ts          # API клиент
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml      # Основной docker-compose
```

## Безопасность

⚠️ **ВАЖНО:** В production среде обязательно измените:

1. `JWT_SECRET` в docker-compose.yml или .env файлах
2. `ADMIN_PASSWORD` на сложный пароль
3. Настройте CORS для вашего домена

## Разработка

### Backend

```bash
cd backend
npm run start:dev  # Режим разработки с hot reload
npm run build      # Сборка для production
npm run start:prod # Запуск production сборки
```

### Frontend

```bash
cd Frontend
npm run dev        # Режим разработки
npm run build      # Сборка для production
npm run start      # Запуск production сборки
```

## Troubleshooting

### Проблемы с зависимостями

```bash
# Очистка кэша npm
npm cache clean --force

# Переустановка зависимостей
rm -rf node_modules package-lock.json
npm install
```

### Проблемы с Docker

```bash
# Пересборка всех образов
docker-compose build --no-cache

# Остановка и удаление контейнеров
docker-compose down -v

# Просмотр логов
docker-compose logs -f
```

## Лицензия

Private
