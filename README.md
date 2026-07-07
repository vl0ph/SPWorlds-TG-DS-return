# SPWorlds-TG-DS-return
Расширение для сайта spworlds.ru, возвращающее кнопки атворизации через Telegram и Discord

# Установка расширения

Это расширение распространяется в виде **распакованной папки** (unpacked extension).  
Ниже описана установка для Chromium-браузеров и Firefox.

---

## Google Chrome / Chromium / Microsoft Edge / Brave

### 1. Скачайте репозиторий

Скачайте ZIP:

```
Code → Download ZIP
```

или клонируйте через Git:

```bash
git clone https://github.com/vl0ph/SPWorlds-TG-DS-return
```

Распакуйте архив.

---

### 2. Откройте страницу расширений

Перейдите:

```
chrome://extensions/
```

Для Edge:

```
edge://extensions/
```

Для Brave:

```
brave://extensions/
```

---

### 3. Включите режим разработчика

В правом верхнем углу включите:

```
Developer mode
```

---

### 4. Загрузите расширение

Нажмите:

```
Load unpacked
```

Выберите папку расширения, где находится файл:

```
manifest.json
```

Например:

```
SPWorlds-TG-DS-return/
├── manifest.json
├── content.js
```

---

### 5. Готово

Расширение появится в списке установленных.

Если браузер показывает предупреждение:

> This extension is not listed in the Chrome Web Store

это нормально. Расширение установлено вручную через режим разработчика.

---

# Mozilla Firefox

## 1. Откройте страницу расширений

Перейдите:

```
about:debugging#/runtime/this-firefox
```

---

## 2. Откройте временное расширение

Нажмите:

```
Load Temporary Add-on...
```

---

## 3. Выберите manifest.json

Откройте файл:

```
manifest.json
```

в папке расширения.

---

## 4. Готово

Расширение будет установлено и работать до закрытия Firefox.

> Временные расширения Firefox автоматически удаляются после полного перезапуска браузера. Для постоянной установки требуется публикация в Firefox Add-ons или подпись расширения. (А мне лень)

---

# Обновление расширения

После изменения файлов:

### Chromium-браузеры

Откройте:

```
chrome://extensions/
```

и нажмите кнопку:

```
Reload ↻
```

у расширения.

---

### Firefox

Вернитесь в:

```
about:debugging#/runtime/this-firefox
```

и загрузите расширение заново.

---

# Требования

- Google Chrome / Chromium 88+
- Microsoft Edge 88+
- Brave
- Firefox 109+
