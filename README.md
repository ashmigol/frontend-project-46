
### Hexlet tests and linter status:

[![Actions Status](https://github.com/ashmigol/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/ashmigol/frontend-project-46/actions)

###  Node CI

[![Node CI](https://github.com/ashmigol/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/ashmigol/frontend-project-46/actions/workflows/node.js.yml)

### Maintainability:

[![Maintainability](https://api.codeclimate.com/v1/badges/473740f3e2277ad44008/maintainability)](https://codeclimate.com/github/ashmigol/frontend-project-46/maintainability)

### Test Coverage:

[![Test Coverage](https://api.codeclimate.com/v1/badges/44b0c9875f6026c95e46/test_coverage)](https://codeclimate.com/github/ashmigol/frontend-project-46/test_coverage)

### Проект "Вычислитель Отличий"
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.
Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.
## Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json
 ### Установка
```
  make install
```
### Системные требования
```
Node.js version v18.15.0
```
### Пример работы  файлов с раширением .json
```
  gendiff __fixtures__/file1.json __fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/XrMmdgzOrBpkVipwiy2Zkj43a.png)](https://asciinema.org/a/XrMmdgzOrBpkVipwiy2Zkj43a)

### Пример работы файлов с раширением .yaml / .yml
```
  gendiff __fixtures__/file1.yaml __fixtures__/file2.yml
```
[![asciicast](https://asciinema.org/a/ZVBHSKJhFdpuuiL2CukbCFswm.png)](https://asciinema.org/a/ZVBHSKJhFdpuuiL2CukbCFswm)



### Пример работы приложения с форматтером plain
```
  gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/GP09J5hlXu86mhabHImsD9Hiu.png)](https://asciinema.org/a/GP09J5hlXu86mhabHImsD9Hiu)


### Пример работы приложения с форматтером json
```
  gendiff --format json __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/CfN4K28FamA6xrpO4QXYfNO7s.png)](https://asciinema.org/a/CfN4K28FamA6xrpO4QXYfNO7s)
