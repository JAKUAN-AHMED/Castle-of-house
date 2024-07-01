const getData=()=>{
    const storedD=localStorage.getItem('items');
    if(storedD)
        {
            return JSON.parse(storedD);
        }
        else{
            return [];
        }
}
const saveData=(id)=>{
    const save=getData();
    const exist=save.find(data=>data.id===id);
    if(!exist)
        {
            save.push(id);
            localStorage.setItem('items',JSON.stringify(save))
        }
}
export  {getData,saveData};