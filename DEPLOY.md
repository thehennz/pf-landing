# Деплой сайта ПиццаФабрика на новый сервер (с нуля)

Инструкция для **выделенного** VPS (Ubuntu 22.04/24.04), где кроме сайта ничего не крутится.
На таком сервере порт 443 свободен → используем красивый HTTPS без номера порта.

---

## Шаг 1. Доступ по SSH с ключом

### 1.1. Создай ключ на своём компьютере (Windows, PowerShell)

```powershell
ssh-keygen -t ed25519 -C "pf-landing"
```

Нажимай Enter на все вопросы (пароль для ключа — по желанию).
Ключ создастся здесь:
- приватный: `C:\Users\ТЫ\.ssh\id_ed25519`  ← **никому не показывай**
- публичный: `C:\Users\ТЫ\.ssh\id_ed25519.pub`  ← его кладём на сервер

### 1.2. Скопируй публичный ключ на сервер

Сначала зайди на сервер по паролю (его дал хостинг):

```powershell
ssh root@IP_СЕРВЕРА
```

На сервере выполни (вставь содержимое своего .pub файла вместо `СЮДА_КЛЮЧ`):

```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo "СЮДА_КЛЮЧ" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Содержимое ключа на Windows можно вывести так:
```powershell
Get-Content C:\Users\ТЫ\.ssh\id_ed25519.pub
```

### 1.3. Проверь вход по ключу

Открой **новое** окно PowerShell (старое не закрывай!) и зайди:

```powershell
ssh root@IP_СЕРВЕРА
```

Если зашёл без пароля — ключ работает.

### 1.4. Отключи вход по паролю (опционально, но безопаснее)

⚠️ Делай это, ТОЛЬКО когда убедился, что вход по ключу работает.

```bash
sudo nano /etc/ssh/sshd_config
```

Найди и поставь:
```
PasswordAuthentication no
```
Сохрани (Ctrl+O, Enter, Ctrl+X) и перезапусти SSH:
```bash
sudo systemctl restart ssh
```

---

## Шаг 2. Установка Docker

```bash
curl -fsSL https://get.docker.com | sh
```

Проверка:
```bash
docker --version
docker compose version
```

---

## Шаг 3. Открыть порты (файрвол)

Нужны порты **80** (для SSL-сертификата) и **443** (сам сайт).

Если используешь ufw:
```bash
sudo ufw allow 22/tcp     # SSH — обязательно, иначе потеряешь доступ!
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

Если у хостинга есть «облачный файрвол» в панели управления — открой 80 и 443 ещё и там.

---

## Шаг 4. Привязать домен

Домен (например, `pizzafabrika.ru` или `fhs2.duckdns.org`) должен указывать на IP сервера
(A-запись). Для DuckDNS — обнови IP в личном кабинете duckdns.org.

---

## Шаг 5. Скачать и настроить проект

```bash
git clone https://github.com/thehennz/pf-landing.git
cd pf-landing
```

Так как сервер выделенный и порт 443 свободен — меняем `8443` на `443`:

**Файл `Caddyfile`** — должен выглядеть так (подставь свой домен):
```
ТВОЙ-ДОМЕН {
    reverse_proxy app:3000
}
```
(без `:8443` — Caddy сам возьмёт стандартные 80/443)

**Файл `docker-compose.yml`** — в секции caddy порты должны быть:
```yaml
    ports:
      - "80:80"
      - "443:443"
```

Редактировать можно через `nano Caddyfile` и `nano docker-compose.yml`.

---

## Шаг 6. Запуск

```bash
docker compose up -d --build
```

Первая сборка займёт 2–3 минуты. Caddy автоматически получит SSL-сертификат.

Проверь логи:
```bash
docker compose logs caddy
```
Ищи строку `certificate obtained successfully`.

Готово — сайт на **https://ТВОЙ-ДОМЕН** 🎉

---

## Обновление сайта (когда внесли изменения в код)

```bash
cd pf-landing
git pull
docker compose up -d --build
```

---

## Полезные команды

| Команда | Что делает |
|---|---|
| `docker compose ps` | список контейнеров и их статус |
| `docker compose logs -f app` | логи приложения в реальном времени |
| `docker compose logs caddy` | логи Caddy (SSL, проксирование) |
| `docker compose restart` | перезапустить всё |
| `docker compose down` | остановить и удалить контейнеры |
| `docker compose up -d` | запустить снова |

---

## Полностью удалить сайт с сервера

```bash
cd pf-landing
docker compose down --rmi all -v
cd .. && rm -rf pf-landing
```

После этого от сайта не остаётся ничего.
