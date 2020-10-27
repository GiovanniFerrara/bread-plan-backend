NODE_ENV="test"
npx sequelize db:migrate:undo:all --env test
npx sequelize db:migrate --env test
npm run build

jest --watchAll