## User Table
| userIdx | id | name | password | 
| ---- | ------ | ---- | ---- |
| 1 | sofia | sophia | pwd1 | 
| 2 | amandy | amanda | pwd2 | 

## Article Table

| articleIdx | author | title | contents | likes |
| ---- | ---- | ---- | ---- |---- |
| 1 | alex | covid19 | confirmed cases | 2 | 
| 2 | alex | protest | huntington beach | 4 | 

## Like Table

| userIdx | articleIdx |
| ---- | ---- |
| 1 | 1 |
| 1 | 2 |

## Comment Table

| articleIdx | userIdx | comment |
| ---- | ---- | ---- |
| covid19 | 1 | relate 
| covid19 | 2 | sad 
