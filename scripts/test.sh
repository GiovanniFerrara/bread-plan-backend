NODE_ENV="test"
npx sequelize db:migrate:undo:all --env test
npx sequelize-cli db:migrate --url 'postgres://postgres:password@postgres-db/postgres' --env test
npm run build
jest --watchAll