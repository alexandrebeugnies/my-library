import { getRandomQuote } from '../src'
import { quotes } from '../src/citations'

test('It gets a random quote', () => {
  const randomQuote = getRandomQuote()

  //! On vérifie que l'on récupère bien une citation
  expect(randomQuote).toContain(quotes)
})
