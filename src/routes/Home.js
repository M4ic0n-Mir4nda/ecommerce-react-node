import { useState, useEffect } from 'react';
import { getSearchProdutos, getAllProdutos } from '../services/produtos';
import Adverts from '../components/Adverts';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import styled from 'styled-components';
import IconsMenu from '../components/IconsMenu';
import logo from '../images/logo.png'
import Input from '../components/Input';
import Buttom from '../components/Buttom';

const GlobalContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #f1f1f1;
  padding-bottom: 2.5rem;
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

const HeaderContainer = styled.header`
  display: flex;
  background: linear-gradient(25deg, #F8C630, #f4cf60);
  align-items: center;
  justify-content: space-evenly;
  min-width: 300px;
  width: 100%;
`

const Logo = styled.img`
  padding: 10px;
  width: 200px;
  height: 100px;
`

function Home() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [cardsPage, setCardsPage] = useState(12);
  const [loading, setLoading] = useState(true);
  const [consulta, setConsulta] = useState('')

  const [products, setProducts] = useState([]);
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchSearchs()
  }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  function handleScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight) {
      setPage(page + 1);
    }
    return;
  }
  
  async function fetchProducts() {
    const productsAPI = await getAllProdutos(page, cardsPage);
    setProducts(productsAPI);
  }

  async function fetchSearchs() {
    const pesquisados = await getSearchProdutos(consulta, page, cardsPage)
    setResponse(pesquisados)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const pesquisados = await getSearchProdutos(search, page, cardsPage)
    setResponse(pesquisados)
    setConsulta(search)
    setPage(1)
    setCardsPage(12)
  }

  return (
    <GlobalContainer>
      <form onSubmit={handleSubmit}>
        <HeaderContainer>
          <SearchContainer>
            <Logo src={logo} alt='Logo da Empresa'/>
            <Input 
              aoAlterado={valor => setSearch(valor)}
              valor={search}
            />
            <Buttom />
            <IconsMenu />
          </SearchContainer>
        </HeaderContainer>
        <Menu />
        <Adverts />
        { response.length > 0 ? <Card array={response} />
         : <Card array={products} /> }
        <Footer />
      </form>
    </GlobalContainer>
  );
}

export default Home;
