import  {useState , useEffect} from 'react';


const useCallSingleProductApi = (id) => {
    let [obj, setObj] = useState(null);

    let getData = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`);
        let dataObj = await data.json();
        setObj(dataObj);
      };
    
      useEffect(() => {
        getData();
      }, []);

      return obj ;
}

export default useCallSingleProductApi
