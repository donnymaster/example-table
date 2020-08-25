## Backend

1. Выполнить установку зависимостей в папке backend: `composer install`
2. Настроить файл `env`
3. Выполнить миграции вместе с посевом: `php artisan migrate --seed`
4. Запустить сервер для разработки: `php artisan serve` или `php -S localhost:8000`

## Frontend

1. Выполнить установку записимостей в папке frontend: `npm install`
2. Выполнить настройку api, если адрес бэкенда не localhost и порт не 8000 в файле: `service/api.js`:
```
    // api host
    const host = document.location.hostname; // or any
    //const port = document.location.port;
    const port = 8000; // developer port laravel server
```
3. Выполнить команду `npm run build`
4. В папке, где собрался проект запустить локальный сервер: `php -S localhost:9090`