// api host
const host = document.location.hostname; // or any
//const port = document.location.port;
const port = 8000; // developer port laravel server
const accessToken = 'z-wtobH9a5MGt0@';

class ApiService {

   async get_users(){
       const users = await fetch(`http://${host}:${port}/api/employees`, {
           method: 'GET',
           headers: {
            'Content-Type': 'application/json'
          }
       });
       const body = await users.json();
       return body;
   }

   async withAddState(){
        return new Promise((res, rej) => {
            this.get_users()
                .then((data) => {
                    const withSelect = data.data.map((user) => {
                        return {
                            ...user,
                            isSelect: false
                        }
                    });
                    res(withSelect);
                });
        });
   }

   /**
    * 
    * Format data create user (object)
    * {
    *   first_name: 'Mark', // - required
    *   last_name: 'Singer', // - required
    *   date_of_birth: '2020-06-06', // required|format:Y-m-d
    *   weight: number,
    *   height: number,
    *   salary: number,
    *   position[]: [ {id: 1}, {id: 2}, {id: 3} ] {id: 1}, // -> id position
    * }
    */

   async create_user(data){
    const result = await fetch(`http://${host}:${port}/api/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access_token': accessToken
          },
        body: JSON.stringify(data)
    });
    const body = await result.json();
    return body;
   }

   async delete_user(id){
    const result = await fetch(`http://${host}:${port}/api/employees/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'access_token': accessToken
        },
        method: 'DELETE'
    });
    const body = await result.json();
    return body;
   }

   
}

export default ApiService;