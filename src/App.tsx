import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { useEffect } from 'react';
import { fetchCountries } from 'features/countries/countriesSlice';
import { useAppDispatch, useAppSelector } from 'store';

function App() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(state => state.countries.list);

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
