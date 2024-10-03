<template>
  <p>Веб-приложение, предназначенное для отслеживания посещаемости студентов учебного заведения. Оно позволяет просматривать статистику посещаемости за месяц и формировать ежедневные отчеты, которые автоматически отправляются куратору в Telegram.</p>
  <p>Приложение находится на стадии доработки и планируется к внедрению в колледж.</p>
  <p>Регистрация в системе осуществляется через Telegram, а для демонстрации добавлена возможность входа через параметры в ссылке.</p>
  <br />
  <h4 class="text-lg font-bold">Данные для входа:</h4>
  <p>Админ: <a href="https://www.visittracker.shelikhoff.ru/login?demo=true&role=admin" target="_blank">https://www.visittracker.shelikhoff.ru/login?demo=true&role=admin</a></p>
  <p>Куратор: <a href="https://www.visittracker.shelikhoff.ru/login?demo=true&role=curator" target="_blank">https://www.visittracker.shelikhoff.ru/login?demo=true&role=curator</a></p>
  <br />
  <h4 class="text-lg font-bold">Основной функционал:</h4>
  <ul class="list-disc list-inside">
    <li>Разделение ролей: администратор, куратор, староста.</li>
    <li>Создание групп, добавление в них студентов и редактирование данных о студентах и группах.</li>
    <li>Ежедневные отчеты по посещаемости.</li>
    <li>Выгрузка данных за месяц в формате Excel.</li>
    <li>Уведомления через бота Telegram.</li>
  </ul>
  <br />
  <h4 class="text-lg font-bold">Технические аспекты:</h4>
  <p>Для создания фронтенда были использованы <a href="https://react.dev/" target="_blank">React</a>, стейт-менеджер <a href="https://zustand-demo.pmnd.rs/" target="_blank">Zustand</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind</a> и <a href="https://github.com/Shelikhof/visitTracker/blob/main/client/package.json" target="_blank">другие технологии</a>. Также применена архитектура <a href="https://feature-sliced.design/" target="_blank">Feature-Sliced Design</a>, что позволяет создавать функциональные блоки независимо друг от друга.</p>
  <p>Серверная часть приложения написана на <a href="https://nestjs.com/" target="_blank">NestJs</a> с использованием ORM <a href="https://sequelize.org/" target="_blank">Sequelize</a> и <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>. Для взаимодействия с API Telegram применяется <a href="https://www.npmjs.com/package/nestjs-telegraf" target="_blank">nestjs-telegraf</a>.</p>
</template>
<style scoped>
a {
  text-decoration: underline;
}
</style>
