// api host
const host = document.location.hostname; // or any
//const port = document.location.port;
const port = 8000; // developer port laravel server

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

   async create_user(data){
    const result = await fetch(`http://${host}:${port}/api/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    const body = await result.json();
    return body;
   }

   async delete_user(id){
    const result = await fetch(`http://${host}:${port}/api/employees/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    });
    const body = await result.json();
    return body;
   }
}

export default ApiService;