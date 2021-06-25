import Header from './components/Header'
import FlashCards from './components/FlashCards'
import Button from './components/Button'
import { useState, useEffect } from 'react'

function App() {

  const[loading, setLoading] = useState(true);
  const [profiles,setProfiles] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 4;
  let [totalNumberOfPages, setNumberOfPages] = useState(0);

  useEffect (() => {
    const getCardProfiles = async () => {
      const [data, dataSize] = await fetchCardProfiles();
      setLoading(false);
      setProfiles(data);
      setNumberOfPages(Math.ceil( dataSize / limit ));
    }
    getCardProfiles();
  }, []);

  const fetchCardProfiles = async () => {
    return fetch('https://akshada4.github.io/mha-data/data.json')
    .then(res => res.json())
    .then(data => {
      return [data, data.length];
    })
  }

  
  return (
    <div>
      <Header />
      <div className="content">
        <FlashCards loading={loading} 
            cards={profiles.slice(page * limit , (page * limit) + limit)} />
        <div className="buttons-container" style={!loading ? {display: 'block'} : {display: 'none'}}>
          <Button id="previous" 
              className={page === 0 ? "disabled-prev" : "prev-btn"}
              page={page} setPage={setPage}
              disable={page === 0}/>
          <Button id="next" 
              className={(page < totalNumberOfPages-1) ? 
                                  "next-btn" : "disabled-next"} 
              page={page} setPage={setPage} 
              disable={page >= totalNumberOfPages-1}/>
        </div> 
      </div>
    </div>
  )
}

export default App;
