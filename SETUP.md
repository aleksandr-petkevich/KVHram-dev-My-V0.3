# Настройка проекта

## Структура проекта

Проект состоит из двух основных частей:

- **Backend** (NestJS) - API сервер на порту 3001
- **Frontend** (Next.js) - Веб-интерфейс на порту 3000

## Быстрый старт

### Вариант 1: Docker (рекомендуется)

```bash
# 1. Установите Docker и Docker Compose
# Скачайте с https://www.docker.com/get-started

# 2. Запустите все сервисы одной командой
docker-compose up --build

# 3. Откройте браузер
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001/api

# 4. Войдите в систему
# Логин: admin
# Пароль: admin
```

### Вариант 2: Локальная разработка

#### Backend

```bash
# 1. Установите зависимости
cd backend
npm install

# 2. Настройте переменные окружения
cp .env.example .env
# Отредактируйте .env файл при необходимости

# 3. Запустите MongoDB
# Убедитесь, что MongoDB запущена на порту 27017
# Или используйте Docker:
docker run -d -p 27017:27017 --name mongodb mongo:6

# 4. Запустите backend в режиме разработки
npm run start:dev

# Backend будет доступен на http://localhost:3001/api
```

#### Frontend

```bash
# 1. Установите зависимости
cd Frontend
npm install

# 2. Настройте переменные окружения
cp .env.local.example .env.local
# Отредактируйте .env.local файл при необходимости

# 3. Запустите frontend в режиме разработки
npm run dev

# Frontend будет доступен на http://localhost:3000
```

## Проверка работоспособности

### 1. Проверка Backend API

```bash
# Попробуйте получить доступ к API (должен вернуть 401 без токена)
curl http://localhost:3001/api/events

# Войдите в систему и получите токен
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin"}'

# Используйте полученный токен для запроса событий
curl http://localhost:3001/api/events \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 2. Проверка Frontend

1. Откройте http://localhost:3000
2. Вы должны увидеть страницу входа
3. Войдите с credentials: admin/admin
4. Вы должны увидеть главную панель с календарем и таблицей событий

## Создание первого события

1. Войдите в систему (admin/admin)
2. Нажмите кнопку "Создать событие"
3. Заполните форму:
   - Дата: выберите дату
   - Название: "Тестовое событие"
   - Статус: "Новая"
   - Приоритет: "Обычный"
4. Нажмите "Создать"
5. Событие появится в таблице и на календаре

## Устранение проблем

### Проблема: Port 3000/3001 already in use

```bash
# На Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# На Linux/Mac
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Проблема: MongoDB connection refused

```bash
# Проверьте, запущена ли MongoDB
# Windows
Get-Service -Name MongoDB

# Linux/Mac
sudo systemctl status mongod

# Или запустите через Docker
docker start mongodb
```

### Проблема: Dependencies installation fails

```bash
# Очистите кэш и переустановите
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Проблема: Docker containers won't start

```bash
# Пересоберите образы
docker-compose down -v
docker-compose build --no-cache
docker-compose up

# Проверьте логи
docker-compose logs -f
```

## Переменные окружения

### Backend (.env)

```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/tz-admin
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Production деплой

### Изменения для production:

1. **Измените пароль администратора:**
   - В docker-compose.yml измените `ADMIN_PASSWORD`
   - Или используйте переменные окружения

2. **Измените JWT Secret:**
   - В docker-compose.yml измените `JWT_SECRET` на сложную строку

3. **Настройте домен:**
   - Измените `NEXT_PUBLIC_API_URL` на ваш реальный API URL
   - Настройте CORS в backend (src/main.ts)

4. **Используйте HTTPS:**
   - Настройте reverse proxy (nginx)
   - Получите SSL сертификат (Let's Encrypt)

## Дополнительная информация

- Подробная документация: см. README.md
- API документация: http://localhost:3001/api/docs (Swagger, если включен)
- Логи backend: `docker-compose logs backend`
- Логи frontend: `docker-compose logs frontend`
- Логи MongoDB: `docker-compose logs mongodb`
