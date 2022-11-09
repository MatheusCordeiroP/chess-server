# Chess Online API

Executando pela primeira vez:

```bash
yarn
yarn dev
```

Executando após a primeira vez:

```bash
yarn dev
```

Criando migrations:

```
npx sequelize migration:generate --name migration_name
```

Executando migrations:

```
npx sequelize db:migrate
```

Criando seeders:

```
npx sequelize seed:generate --name demo-user
```

Executando seeders:

```
npx sequelize db:seed --seed seedname.js
npx sequelize db:seed:all
```
