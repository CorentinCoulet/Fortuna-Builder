CREATE ROLE FortunaPerms WITH LOGIN PASSWORD '46785319205470164';
CREATE DATABASE FortunaBuilder OWNER FortunaPerms;
GRANT ALL PRIVILEGES ON DATABASE FortunaBuilder TO FortunaPerms;
