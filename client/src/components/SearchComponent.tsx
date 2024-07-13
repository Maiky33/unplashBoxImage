import {useState,useEffect} from "react"
import axios from 'axios';
import "./scss/searchComponent.scss"



function SearchComponent(props:any) {

  const {inputValue, setinputValue} = props

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [links, setLinks] = useState({});
  const accessKey = process.env.REACT_APP_ACCESS_KEY; // Reemplaza con tu Access Key de Unsplash

  const onHandleChange =(e:any)=>{ 
    setinputValue(e.target.value)
  }

  useEffect(()=>{ 
    console.log(inputValue)
  },[inputValue])


  const fetchPhotos = async (page:any) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos`, {
        params: {
          page: page,
          client_id: accessKey
        }
      });

      setPhotos(response.data);
      parseLinks(response.headers.link);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const parseLinks = (linkHeader:any) => {
    const links = linkHeader.split(', ').reduce((acc:any, link:any) => {
      const [urlPart, relPart] = link.split('; ');
      const url = urlPart.replace(/<(.*)>/, '$1').trim();
      const rel = relPart.replace(/rel="(.*)"/, '$1').trim();
      acc[rel] = url;
      return acc;
    }, {});
    setLinks(links);
  };

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  console.log("photos",photos)
  console.log("links",links)

  return (
    <div className="containerSearchComponent">   
      <div className={!inputValue || inputValue === "" ? "titleAndSubtitleSearch" : "titleAndSubtitleSearchMarginAnimation"}>   
        {!inputValue || inputValue === "" ? 
          <h2 className="title">Search</h2> 
          :
          null
        }
        {!inputValue || inputValue === "" ? <p className="subtitle">Search high-resolution images from Unsplash</p>:null}
        <input onChange={onHandleChange} className={!inputValue || inputValue === "" ? "inputSearch" : "inputSearchActive"} placeholder="Enter your keywords..."/>
      </div>
    </div>
  )
}

export default SearchComponent;
