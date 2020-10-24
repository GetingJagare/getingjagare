# Добавление роутов

**1. Добавить в файл config/routes.php строку, например:**

```php
return [
    ...
    '\/c\/olett\/?' => 'pages/olett'
    ...
];
```

**2. Добавить саму вьюху внутри папки views**

Пример выше уже добавлен для демонстрации. 

В итоге, по адресу /c/olett будет выведено содержимое,
хранимое в views/pages/olett.php (расширение .php не надо указывать).

Можно задавать любую вложенность директорий, главное чтобы это было внутри views и отражалось в routes.php
