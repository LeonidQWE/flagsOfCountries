import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { useEffect } from 'react';
import { fetchCountries } from 'features/countries/countriesSlice';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.list);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [countries.length, dispatch]);

  console.log(countries);

  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default App
