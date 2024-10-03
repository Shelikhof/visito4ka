<template>
  <p>Веб-приложение, созданное для автоматизации бизнес-процесса в колледже, связанного с выдачей справок для студентов. Это было MVP-приложение, разработанное для внутреннего руководства колледжа с целью демонстрации его возможностей. Однако проект не был реализован и внедрён, так как его реализация не была признана целесообразной.</p>
  <br />
  <h4 class="text-lg font-bold">Данные для входа:</h4>
  <p>Ссылка на сайт: <a href="https://www.ticket.shelikhoff.ru/" target="_blank">https://www.ticket.shelikhoff.ru/</a></p>
  <p>
    Админ: <span>логин - <b>admin</b>, пароль - <b>1111</b></span>
  </p>
  <p>
    Преподаватель: <span>логин - <b>prepod</b>, пароль - <b>1111</b></span>
  </p>
  <p>
    Менеджер: <span>логин - <b>manager</b>, пароль - <b>1111</b></span>
  </p>
  <br />
  <h4 class="text-lg font-bold">Основной функционал:</h4>
  <ul class="list-disc list-inside">
    <li>Разделение ролей на администратора, куратора и менеджера.</li>
    <li>Возможность добавлять группы, студентов и новых пользователей.</li>
    <li>Создание заявок на получение справок.</li>
    <li>Выгрузка данных заявок в формате Excel.</li>
  </ul>
  <br />
  <h4 class="text-lg font-bold">Технологический стек</h4>
  <p>Фронтенд создан на <a href="https://react.dev/" target="_blank">React</a> с использованием <a href="https://redux.js.org/" target="_blank">Redux</a> и CSS-модулей.</p>
  <p>Сервер разработан на <a href="https://nestjs.com/" target="_blank">NestJs</a> с применением ORM <a href="https://sequelize.org/" target="_blank">Sequelize</a> и <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>.</p>
</template>
<style scoped>
a {
  text-decoration: underline;
}
</style>
