export const fetchData = async () => {
    try{ 
        const response = await fetch("http://mocker.ennate.academy/users/bulk");
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }    
}