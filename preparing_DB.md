#open terminal
 mysql -u root -p
 
Do the following as root
# preparing the database
```sql
create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant all privileges on shopdb.* to shopper;
````



