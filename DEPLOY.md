# Деплой сайта ПиццаФабрика на новый сервер (с нуля)

Инструкция для **выделенного** VPS (Ubuntu 22.04/24.04), где кроме сайта ничего не крутится.
На таком сервере порт 443 свободен → используем красивый HTTPS без номера порта.

Порядок: **сначала безопасность сервера (шаги 1–4), потом установка сайта (шаги 5–8).**

---

# ЧАСТЬ 1. Безопасность сервера

## Шаг 1. Доступ по SSH с ключом

### 1.1. Создай ключ на своём компьютере (Windows, PowerShell)

```powershell
ssh-keygen -t ed25519 -C "pf-landing"
```

Нажимай Enter на все вопросы. Ключ создастся здесь:
- приватный: `C:\Users\ТЫ\.ssh\id_ed25519`  ← **никому не показывай**
- публичный: `C:\Users\ТЫ\.ssh\id_ed25519.pub`  ← его кладём на сервер

### 1.2. Скопируй публичный ключ на сервер

Зайди на сервер по паролю (его дал хостинг):
```powershell
ssh root@IP_СЕРВЕРА
```

На сервере выполни (вставь содержимое своего .pub файла вместо `СЮДА_КЛЮЧ`):
```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo "СЮДА_КЛЮЧ" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Содержимое ключа на Windows выводится так:
```powershell
Get-Content C:\Users\ТЫ\.ssh\id_ed25519.pub
```

### 1.3. Проверь вход по ключу

Открой **новое** окно PowerShell (старое не закрывай!) и зайди:
```powershell
ssh root@IP_СЕРВЕРА
```
Если зашёл без пароля — ключ работает.

### 1.4. Отключи вход по паролю

⚠️ Делай это, ТОЛЬКО когда убедился, что вход по ключу работает.

```bash
nano /etc/ssh/sshd_config
```
Найди и поставь:
```
PasswordAuthentication no
```
Сохрани (Ctrl+O, Enter, Ctrl+X) и перезапусти SSH:
```bash
systemctl restart ssh
```

---

## Шаг 2. fail2ban (защита от перебора паролей)

Автоматически банит IP, которые пытаются подобрать доступ к SSH.

```bash
apt install fail2ban -y
cat > /etc/fail2ban/jail.local << 'EOF'
[sshd]
enabled = true
maxretry = 5
bantime = 1h
EOF
systemctl enable fail2ban
systemctl restart fail2ban
```

Проверка:
```bash
fail2ban-client status sshd
```

---

## Шаг 3. Автообновления безопасности

Чтобы критические патчи ставились сами.

```bash
apt install unattended-upgrades -y
cat > /etc/apt/apt.conf.d/20auto-upgrades << 'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
EOF
```

Ставятся только обновления **безопасности** — остальное не трогается, чтобы ничего не сломалось.

---

## Шаг 4. Файрвол (ufw)

Открываем только нужные порты: **22** (SSH), **80** и **443** (сайт).

```bash
ufw allow 22/tcp     # SSH — ОБЯЗАТЕЛЬНО, иначе потеряешь доступ к серверу!
ufw allow 80/tcp     # нужен для получения SSL-сертификата
ufw allow 443/tcp    # сам сайт по HTTPS
ufw enable           # на вопрос ответь y
```

Проверка:
```bash
ufw status
```

> ⚠️ Если на сервере есть ещё и **VPN** — у него свои порты, и их тоже надо разрешить,
> иначе VPN перестанет работать. На выделенном сервере только под сайт этой проблемы нет.
> Подробнее про порты и сертификаты — в `SSL-CERTIFICATES.md`.

---

# ЧАСТЬ 2. Установка сайта

## Шаг 5. Установка Docker

```bash
curl -fsSL https://get.docker.com | sh
```
Проверка:
```bash
docker --version
docker compose version
```

---

## Шаг 6. Привязать домен

Домен (например, `pizzafabrika.ru` или `fhs2.duckdns.org`) должен указывать на IP сервера
(A-запись). Для DuckDNS — обнови IP в личном кабинете duckdns.org.

---

## Шаг 7. Скачать и настроить проект

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

**Файл `docker-compose.yml`** — в секции caddy порты:
```yaml
    ports:
      - "80:80"
      - "443:443"
```

Редактировать: `nano Caddyfile` и `nano docker-compose.yml`.

---

## Шаг 8. Запуск

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

# Обслуживание

## Обновить сайт (после изменений в коде)
```bash
cd pf-landing
git pull
docker compose up -d --build
```

## Обновить сам сервер (систему)
```bash
apt update && apt upgrade -y
# проверить, нужна ли перезагрузка:
[ -f /var/run/reboot-required ] && echo "НУЖНА перезагрузка" || echo "не нужна"
# если нужна:
reboot
```
После перезагрузки контейнеры поднимутся сами (`restart: unless-stopped`).

## Полезные команды

| Команда | Что делает |
|---|---|
| `docker compose ps` | список контейнеров и статус |
| `docker compose logs -f app` | логи приложения в реальном времени |
| `docker compose logs caddy` | логи Caddy (SSL, проксирование) |
| `docker compose restart` | перезапустить всё |
| `docker compose down` | остановить и удалить контейнеры |
| `docker compose up -d` | запустить снова |
| `fail2ban-client status sshd` | кого забанил fail2ban |
| `ufw status` | какие порты открыты |

## Полностью удалить сайт с сервера
```bash
cd pf-landing
docker compose down --rmi all -v
cd .. && rm -rf pf-landing
```
После этого от сайта не остаётся ничего.
