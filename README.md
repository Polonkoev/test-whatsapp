Для локального запуска приложения нужно скачать репозиторий и открыть в подходящей IDE, приложение написано на React, поэтому обязательно в терминале последовательно нужно вызвать команды:

### `npm install`

### `npm start`

Для корректной работы приложения нужен авторизованый аккаунт от сервиса ГРИН-АПИ.
В левом верхнем углу есть кнопка для авторизации в приложении. При нажатии на нее, выпадает модальное окно, в котором нужно ввести
авторизационные данные от сервиса, после успешной авторизации, можно приступать к отправке сообщений.
После успешной авторизации приложение будет слать запрос на сервер, каждые 10 секунд по протоколу HTTP.

Если у в аккаунте есть непрочитанные сообщения, они при запуске отрисуются в главном окне сообщений, я просто не успел это исправить.
Приложению нужно еще много доработок.
