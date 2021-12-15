import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            <h1>RepoProvas</h1>
            <p>O quer deseja?</p>
            <Link to='/new'>
                <button>Enviar uma prova</button>
            </Link>
            <Link to='/search'>
                <button>Ver uma prova</button>
            </Link>
        </main>
    );
}
