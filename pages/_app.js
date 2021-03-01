import '../styles/globals.css'
import Navigation from './Navigation';
import '../styles/components/BookCard.css';
import '../styles/pages/index.css';

function MyApp({ Component, pageProps }) {
    return (
        <Navigation>
            <Component {...pageProps} />
        </Navigation>
    )
}

export default MyApp