# Carrtoonist Website

Laravel website for Carrtoonist with simple content management system to capture email submissions.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

- composer
- mysql
- node
- php ^7.1
- phpunit
- webpack
- yarn


### Installing

```
# 1. Install PHP dependencies
composer install

# 2. Copy example environment file to local
cp .env.example .env

# 3. Set your application key
php artisan key:generate

# 4. Create database from DB_DATABASE in .env
mysql -u root
CREATE DATABASE `y7_laravel`;
exit

# 5. Migrate Database
php artisan migrate

# 6. Install front-end dependencies
yarn
yarn run dev

# 7. Link directory to valet
valet link
valet open
```


## Running the tests

```
phpunit
```


## Deployment

Deployment handled through Forge.


## Built With

- [Laravel](https://laravel.com/docs/5.5)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [VueJS](https://vuejs.org/v2/guide/)
