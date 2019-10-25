export const fetchData = async () => {
    try{ 
       // const response = await fetch("https://randomuser.me/api");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }    
}